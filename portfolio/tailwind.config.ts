import type { Config } from "tailwindcss";

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
        accent: {
          DEFAULT: "#818cf8", // Indigo-400
          soft: "rgba(129, 140, 248, 0.1)",
        },
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
        soft: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(129, 140, 248, 0.15)",
        "btn-primary": "0 0 0 0 transparent", // Cleaner flat look
        "btn-primary-hover": "0 10px 25px -5px rgba(129, 140, 248, 0.4)",
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
        "gradient-card": "linear-gradient(180deg, rgba(39, 39, 42, 0.4) 0%, rgba(24, 24, 27, 0.2) 100%)", // Glassy zinc
        "gradient-btn-primary": "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)", // Indigo gradient
        "gradient-pill-dot": "linear-gradient(135deg, #a5b4fc, #6366f1)",
      },
      zIndex: {
        "header": "40",
        "header-bg": "50",
        "menu": "60",
        "modal-backdrop": "9998",
        "modal": "9999",
      },
    },
  },
  plugins: [],
};

export default config;
