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
          DEFAULT: "#050816",
          alt: "#0b1020",
        },
        card: "#0f172a",
        accent: {
          DEFAULT: "#38bdf8",
          soft: "rgba(56, 189, 248, 0.1)",
        },
        text: {
          DEFAULT: "#e5e7eb",
          muted: "#9ca3af",
        },
        border: "#1f2937",
      },
      borderRadius: {
        lg: "1.25rem",
        full: "999px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.75)",
        glow: "0 0 16px #38bdf8",
        "btn-primary": "0 12px 32px rgba(56, 189, 248, 0.45)",
        "btn-primary-hover": "0 16px 40px rgba(56, 189, 248, 0.6)",
      },
      maxWidth: {
        content: "1080px",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, #0f172a 0, #020617 45%, #000 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.92))",
        "gradient-btn-primary": "radial-gradient(circle at 30% 0, #38bdf8, #0ea5e9 45%, #0369a1 100%)",
        "gradient-pill-dot": "radial-gradient(circle at 30% 30%, #a5b4fc, #38bdf8)",
      },
    },
  },
  plugins: [],
};

export default config;
