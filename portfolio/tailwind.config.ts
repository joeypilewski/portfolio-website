import type { Config } from "tailwindcss";

// Accent family — single source for the indigo ramp used in text, borders,
// and gradient stops.
const accent = {
  DEFAULT: "#818cf8", // Indigo-400
  soft: "rgba(129, 140, 248, 0.1)",
  strong: "#6366f1", // Indigo-500 — gradient end stop
  deep: "#4f46e5", // Indigo-600
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0a", // Deep space black
          alt: "#111111",
        },
        card: "#121212",
        accent,
        text: {
          DEFAULT: "#f3f4f6", // Gray-100
          muted: "#9ca3af", // Gray-400
        },
        border: "#27272a", // Zinc-800
      },
      borderRadius: {
        lg: "0.75rem", // Slightly sharper
        full: "999px",
      },
      boxShadow: {
        // Signature glow scale — deliberately violet-500, not the accent hue
        // (named exception, see AGENTS.md). Values preserve the exact
        // renders previously inlined per-component.
        "glow-pill": "0 0 20px rgba(139, 92, 246, 0.25)",
        "glow-pill-focus": "0 0 30px rgba(139, 92, 246, 0.35)",
        "glow-btn": "0 0 25px rgba(139, 92, 246, 0.3)",
        "glow-btn-strong": "0 0 40px rgba(139, 92, 246, 0.4)",
        "glow-card": "0 0 60px rgba(139, 92, 246, 0.3)",
        "glow-dot": "0 0 10px rgba(129, 140, 248, 0.5)",
      },
      maxWidth: {
        content: "1024px",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top center, #1e1b4b 0%, #0a0a0a 60%, #000000 100%)", // Deep indigo glow
      },
      zIndex: {
        "header": "40",
        "header-bg": "50",
        "menu": "60",
        "chat-launcher": "70",
        "chat-panel": "80",
        "chat-overlay": "90",
        "modal-backdrop": "9998",
        "modal": "9999",
      },
    },
  },
  plugins: [],
};

export default config;
