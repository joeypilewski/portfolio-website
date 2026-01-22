"use client";

import { useChat } from "./ChatProvider";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { useEffect } from "react";

export function ChatPanel() {
    const { state, closeChat, minimizeChat, userId, sendMessage } = useChat();

    const { control, sendUserMessage } = useChatKit({
        api: {
            async getClientSecret(existing) {
                if (existing) {
                    // We could implement refresh logic here if needed
                }

                try {
                    const res = await fetch("/api/chatkit/session", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ userId }),
                    });

                    if (!res.ok) {
                        throw new Error(`Failed to fetch session: ${res.statusText}`);
                    }

                    const { client_secret } = await res.json();
                    return client_secret;
                } catch (error) {
                    console.error("Error fetching ChatKit secret:", error);
                    throw error;
                }
            },
        },
        theme: {
            colorScheme: "dark",
            color: {
                accent: {
                    primary: "#818cf8", // Matches tailwind accent DEFAULT
                    level: 2
                }
            },
            radius: "pill",
            density: "compact",
            typography: { fontFamily: "'Inter', sans-serif" },
        },
        composer: {
            placeholder: "Ask anything about Joey's work...",
        },
        startScreen: {
            greeting: "Hi! I'm Joey's AI assistant. Ask me about his experience, skills, or projects.",
            prompts: [
                {
                    label: "Key Skills",
                    prompt: "What are Joey's key skills?",
                    icon: "search"
                },
                {
                    label: "NetSuite Work",
                    prompt: "Tell me about Joey's work with NetSuite.",
                    icon: "lucide:settings"
                },
                {
                    label: "AI Projects",
                    prompt: "What AI projects has he built?",
                    icon: "write"
                },
                {
                    label: "Contact",
                    prompt: "How can I contact Joey?",
                    icon: "user"
                }
            ],
        },
    });

    // Send pending message when chat opens
    useEffect(() => {
        const autoSend = async () => {
            if (state.pendingMessage && state.isOpen && sendUserMessage) {
                // Only send if we are visible (simple check to avoid double send with mobile overlay)
                // This relies on the fact that ChatPanel is hidden on mobile via CSS, but JS still runs.
                // We can check if window.innerWidth >= 768 (md breakpoint)
                if (window.innerWidth >= 768) {
                    try {
                        sendUserMessage({ text: state.pendingMessage });
                        // Clear pending message from global state
                        sendMessage(state.pendingMessage);
                    } catch (err) {
                        console.error("Failed to auto-send message:", err);
                    }
                }
            }
        };
        autoSend();
    }, [state.pendingMessage, state.isOpen, sendUserMessage, sendMessage]);

    if (!state.isOpen) return null;

    return (
        <div className="chat-panel fixed bottom-4 right-4 w-[380px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9999] animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-white">Chat with Joey&apos;s AI</span>
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={minimizeChat}
                        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Minimize chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <button
                        onClick={closeChat}
                        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ChatKit Content */}
            <div className="flex-1 relative bg-card">
                <ChatKit
                    control={control}
                    className="h-full w-full"
                // Add any theme overrides here if ChatKit supports them via props or just rely on CSS
                />
            </div>
        </div>
    );
}
