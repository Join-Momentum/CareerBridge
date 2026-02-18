import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Source Serif 4", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-sm": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        display: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.25" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        label: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.15em" }],
      },
      colors: {
        // Core palette
        ink: "#0f172a",
        "ink-light": "#1e293b",
        slate: "#475569",
        "slate-muted": "#64748b",
        cool: "#94a3b8",
        "warm-white": "#fafaf9",
        "warm-grey": "#f5f5f4",
        "accent-teal": "#0d9488",
        "accent-copper": "#b45309",
        subtle: "#e5e5e5",

        // shadcn/ui-ish semantic tokens
        border: "#e5e5e5",
        input: "#e5e5e5",
        ring: "#0d9488",
        background: "#fafaf9",
        foreground: "#0f172a",

        primary: {
          DEFAULT: "#18284e",
          foreground: "#fafaf9",
        },
        secondary: {
          DEFAULT: "#475569",
          foreground: "#fafaf9",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#fafaf9",
        },
        muted: {
          DEFAULT: "#f5f5f4",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#0d9488",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        sidebar: {
          DEFAULT: "#fafaf9",
          foreground: "#475569",
          primary: "#0f172a",
          "primary-foreground": "#fafaf9",
          accent: "#f5f5f4",
          "accent-foreground": "#0f172a",
          border: "#e5e5e5",
          ring: "#0d9488",
        },
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        lg: "4px",
        md: "2px",
        sm: "2px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      maxWidth: {
        content: "680px",
        wide: "1280px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-left": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.3s ease-out forwards",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
