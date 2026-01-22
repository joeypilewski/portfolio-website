"use client";

import { useState, KeyboardEvent } from "react";
import { useChat } from "./ChatProvider";

export function ChatPillComposer() {
    const [message, setMessage] = useState("");
    const { openChat } = useChat();

    const handleSubmit = () => {
        const trimmedMessage = message.trim();
        if (!trimmedMessage) return;

        openChat(trimmedMessage);
        setMessage("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="chat-pill-composer mt-6">
            <div className="relative flex items-center w-full max-w-md">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about hiring Joey…"
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    aria-label="Chat message input"
                />
                <button
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                    className="absolute right-2 p-2 rounded-full text-text-muted hover:text-accent hover:bg-accent/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Send message"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
