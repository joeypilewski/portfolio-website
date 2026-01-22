"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

interface ChatState {
    isOpen: boolean;
    isMinimized: boolean;
    isInitialized: boolean;
    pendingMessage: string | null;
}

interface ChatContextValue {
    state: ChatState;
    openChat: (initialMessage?: string) => void;
    closeChat: () => void;
    minimizeChat: () => void;
    restoreChat: () => void;
    sendMessage: (message: string) => void;
    clientSecret: string | null;
    userId: string | null;
    isLoading: boolean;
    error: string | null;
}

const ChatContext = createContext<ChatContextValue | null>(null);

const STORAGE_KEYS = {
    userId: "chatkit_user_id",
    isMinimized: "chatkit_minimized",
};

export function ChatProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<ChatState>({
        isOpen: false,
        isMinimized: false,
        isInitialized: false,
        pendingMessage: null,
    });
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Restore persisted state on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUserId = localStorage.getItem(STORAGE_KEYS.userId);
            const storedMinimized = localStorage.getItem(STORAGE_KEYS.isMinimized);

            if (storedUserId) {
                setUserId(storedUserId);
            }

            if (storedMinimized === "true") {
                setState(prev => ({ ...prev, isMinimized: true }));
            }
        }
    }, []);

    // Persist minimized state
    useEffect(() => {
        if (typeof window !== "undefined" && state.isInitialized) {
            localStorage.setItem(STORAGE_KEYS.isMinimized, String(state.isMinimized));
        }
    }, [state.isMinimized, state.isInitialized]);

    // Persist user ID
    useEffect(() => {
        if (typeof window !== "undefined" && userId) {
            localStorage.setItem(STORAGE_KEYS.userId, userId);
        }
    }, [userId]);

    const initializeSession = useCallback(async () => {
        if (clientSecret || isLoading) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/chatkit/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId }),
            });

            if (!response.ok) {
                throw new Error("Failed to create chat session");
            }

            const data = await response.json();
            setClientSecret(data.client_secret);
            setUserId(data.user_id);
            setState(prev => ({ ...prev, isInitialized: true }));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
            console.error("ChatKit initialization error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [clientSecret, isLoading, userId]);

    const openChat = useCallback((initialMessage?: string) => {
        setState(prev => ({
            ...prev,
            isOpen: true,
            isMinimized: false,
            pendingMessage: initialMessage || prev.pendingMessage,
        }));
        initializeSession();
    }, [initializeSession]);

    const closeChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: false,
            isMinimized: false,
            pendingMessage: null,
        }));
    }, []);

    const minimizeChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: false,
            isMinimized: true,
        }));
    }, []);

    const restoreChat = useCallback(() => {
        setState(prev => ({
            ...prev,
            isOpen: true,
            isMinimized: false,
        }));
        initializeSession();
    }, [initializeSession]);

    const sendMessage = useCallback((message: string) => {
        // Clear pending message after it's been handled
        setState(prev => ({
            ...prev,
            pendingMessage: null,
        }));
        // The actual message sending is handled by ChatKit SDK
        console.log("Message to send:", message);
    }, []);

    return (
        <ChatContext.Provider
            value={{
                state,
                openChat,
                closeChat,
                minimizeChat,
                restoreChat,
                sendMessage,
                clientSecret,
                userId,
                isLoading,
                error,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
