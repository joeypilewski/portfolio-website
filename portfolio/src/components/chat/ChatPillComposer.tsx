"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { useChat } from "./ChatProvider";

// Suggested prompts to use when user clicks send with empty input
const SUGGESTED_PROMPTS = [
    "What are Joey's key skills?",
    "Tell me about Joey's work with NetSuite.",
    "What AI projects has he built?",
];

export function ChatPillComposer() {
    const [message, setMessage] = useState("");
    const { openChat } = useChat();
    const inputRef = useRef<HTMLInputElement>(null);

    const getRandomPrompt = () => {
        const randomIndex = Math.floor(Math.random() * SUGGESTED_PROMPTS.length);
        return SUGGESTED_PROMPTS[randomIndex];
    };

    const handleSubmit = () => {
        const trimmedMessage = message.trim();
        // If empty, use a random suggested prompt
        const messageToSend = trimmedMessage || getRandomPrompt();

        // Blur input to dismiss mobile keyboard
        inputRef.current?.blur();

        openChat(messageToSend);
        setMessage("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // Never submit mid-IME-composition (web-conventions §4)
        if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="chat-pill-composer mt-4">
            <div className="relative flex items-center w-full">
                <input
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Joey's AI Agent…"
                    className="w-full px-5 py-2.5 sm:py-3 pr-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-text-muted text-base shadow-glow-pill focus:border-accent/50 focus:shadow-glow-pill-focus transition-all duration-200"
                    aria-label="Chat message input"
                />
                {/* 44px hit box; the visible accent circle stays 32px */}
                <button
                    onClick={handleSubmit}
                    className="group absolute right-0 w-11 h-11 flex items-center justify-center rounded-full"
                    aria-label="Send message"
                >
                    <span className="p-1.5 rounded-full bg-accent text-white shadow-sm group-hover:bg-accent-strong group-active:bg-accent-deep transition-all duration-200 flex items-center justify-center">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}
