"use client";

import { useState, KeyboardEvent, useEffect, useRef } from "react";
import { useChat } from "./ChatProvider";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export function ChatPanel() {
    const { state, closeChat, minimizeChat, clientSecret, isLoading, error, sendMessage } = useChat();
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Handle pending message from pill composer
    useEffect(() => {
        if (state.pendingMessage && state.isOpen) {
            const newMessage: Message = {
                id: crypto.randomUUID(),
                role: "user",
                content: state.pendingMessage,
            };
            setMessages(prev => [...prev, newMessage]);
            sendMessage(state.pendingMessage);

            // Simulate assistant response (replace with actual ChatKit integration)
            setTimeout(() => {
                const assistantMessage: Message = {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: "Hi! I'm Joey's AI assistant. I can help you learn about his skills, experience, and projects. What would you like to know?",
                };
                setMessages(prev => [...prev, assistantMessage]);
            }, 1000);
        }
    }, [state.pendingMessage, state.isOpen, sendMessage]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return;

        const newMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: trimmed,
        };
        setMessages(prev => [...prev, newMessage]);
        setInputValue("");
        sendMessage(trimmed);

        // Simulate response (replace with actual ChatKit)
        setTimeout(() => {
            const assistantMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: "Thanks for your question! I'm here to help you learn more about Joey's expertise in technical solutions architecture, NetSuite ERP, and AI-augmented development.",
            };
            setMessages(prev => [...prev, assistantMessage]);
        }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    if (!state.isOpen) return null;

    return (
        <div className="chat-panel fixed bottom-4 right-4 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-chat-panel animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
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
                        className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Minimize chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <button
                        onClick={closeChat}
                        className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close chat"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isLoading && messages.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                        <div className="animate-pulse text-text-muted">Connecting...</div>
                    </div>
                )}

                {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {messages.length === 0 && !isLoading && !error && (
                    <div className="text-center text-text-muted text-sm py-8">
                        <p className="mb-4">👋 Hi! I&apos;m here to help you learn about Joey.</p>
                        <div className="space-y-2">
                            <button
                                onClick={() => {
                                    setInputValue("What are Joey's key skills?");
                                }}
                                className="block w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-left text-white/80 hover:bg-white/10 hover:border-accent/30 transition-all"
                            >
                                What are Joey&apos;s key skills?
                            </button>
                            <button
                                onClick={() => {
                                    setInputValue("Tell me about Joey's projects");
                                }}
                                className="block w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-left text-white/80 hover:bg-white/10 hover:border-accent/30 transition-all"
                            >
                                Tell me about Joey&apos;s projects
                            </button>
                            <button
                                onClick={() => {
                                    setInputValue("How can I contact Joey?");
                                }}
                                className="block w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-left text-white/80 hover:bg-white/10 hover:border-accent/30 transition-all"
                            >
                                How can I contact Joey?
                            </button>
                        </div>
                    </div>
                )}

                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${msg.role === "user"
                                    ? "bg-gradient-to-r from-accent to-indigo-500 text-white"
                                    : "bg-white/10 text-white/90"
                                }`}
                        >
                            <p className="text-sm leading-relaxed">{msg.content}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Composer */}
            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2.5 pr-12 rounded-full bg-white/5 border border-white/20 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={!inputValue.trim()}
                        className="absolute right-2 p-2 rounded-full text-text-muted hover:text-accent hover:bg-accent/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        aria-label="Send message"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
