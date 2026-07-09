import { useChatKit } from "@openai/chatkit-react";

type ChatKitOptions = Parameters<typeof useChatKit>[0];

// Shared ChatKit configuration for the desktop panel and mobile overlay —
// theme, composer, and start-screen content live here so the two surfaces
// can't drift apart.
export function getChatKitOptions(userId: string | null): ChatKitOptions {
    return {
        api: {
            async getClientSecret() {
                try {
                    const res = await fetch("/api/chatkit/session", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
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
                    level: 2,
                },
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
                    icon: "search",
                },
                {
                    label: "NetSuite Work",
                    prompt: "Tell me about Joey's work with NetSuite.",
                    icon: "lucide:settings",
                },
                {
                    label: "AI Projects",
                    prompt: "What AI projects has he built?",
                    icon: "write",
                },
                {
                    label: "Contact",
                    prompt: "How can I contact Joey?",
                    icon: "user",
                },
            ],
        },
    };
}
