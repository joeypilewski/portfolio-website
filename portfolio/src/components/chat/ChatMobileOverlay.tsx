"use client";

import { useChat } from "./ChatProvider";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { useEffect } from "react";

export function ChatMobileOverlay() {
    const { state, closeChat, userId, sendMessage } = useChat();

    // Lock background scroll when open
    useEffect(() => {
        if (state.isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [state.isOpen]);

    const { control, sendUserMessage } = useChatKit({
        api: {
            async getClientSecret(existing) {
                if (existing) {
                    // Similar to ChatPanel, simplistic handling
                }
                const res = await fetch("/api/chatkit/session", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId }),
                });
                const { client_secret } = await res.json();
                return client_secret;
            },
        },
        theme: {
            colorScheme: "dark",
            color: {
                accent: {
                    primary: "#818cf8",
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
                // Only send if we are visible (mobile check)
                if (window.innerWidth < 768) {
                    try {
                        sendUserMessage({ text: state.pendingMessage });
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
        <div className="chat-mobile-overlay fixed inset-0 h-[100dvh] bg-bg z-[9999] flex flex-col animate-slide-up md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-card safe-area-top shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-white">Chat with Joey&apos;s AI</span>
                </div>
                <button
                    onClick={closeChat}
                    className="p-3 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-text-muted hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                    aria-label="Close chat"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* ChatKit Content */}
            <div className="flex-1 relative bg-card overflow-hidden safe-area-bottom">
                <ChatKit
                    control={control}
                    className="h-full w-full chatkit-mobile-container"
                />
            </div>
        </div>
    );
}
