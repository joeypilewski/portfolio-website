"use client";

import { useChat } from "./ChatProvider";

export function ChatLauncherIcon() {
    const { state, restoreChat } = useChat();

    // Only show when minimized (not when closed or open)
    if (!state.isMinimized || state.isOpen) return null;

    return (
        <button
            onClick={restoreChat}
            className="chat-launcher fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-strong shadow-lg shadow-accent/30 flex items-center justify-center z-chat-launcher hover:scale-110 hover:shadow-xl hover:shadow-accent/40 active:scale-95 transition-all duration-200 animate-fade-in"
            aria-label="Open chat"
        >
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
        </button>
    );
}
