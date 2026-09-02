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
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
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
        // Core palette — Career Bridge brand tokens (logo palette:
        // navy #00335A · blue #0060AD · cyan #4DC5D2).
        // accent-teal (cyan) is dark-grounds only — 2.05:1 on white, fails AA.
        // Use accent-blue on light grounds instead.
        ink: "#00335A",
        "ink-light": "#004274",
        "ink-deep": "#00223D",
        slate: "#4A6376",
        "slate-muted": "#586E80",
        cool: "#A9C4D8",
        "warm-white": "#F4F7FA",
        "warm-grey": "#E9EFF4",
        "accent-teal": "#4DC5D2",
        "accent-blue": "#0060AD",
        "accent-blue-deep": "#004E8C",
        "accent-copper": "#b45309",
        subtle: "#DCE5ED",
        "subtle-strong": "#C2D0DC",

        // shadcn/ui-ish semantic tokens
        border: "#DCE5ED",
        input: "#DCE5ED",
        ring: "#0060AD",
        background: "#F4F7FA",
        foreground: "#00335A",

        primary: {
          DEFAULT: "#00335A",
          foreground: "#F4F7FA",
        },
        secondary: {
          DEFAULT: "#4A6376",
          foreground: "#F4F7FA",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#F4F7FA",
        },
        warning: {
          DEFAULT: "#d97706",
          foreground: "#F4F7FA",
        },
        muted: {
          DEFAULT: "#E9EFF4",
          foreground: "#586E80",
        },
        accent: {
          DEFAULT: "#0060AD",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#00335A",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#00335A",
        },
        sidebar: {
          DEFAULT: "#F4F7FA",
          foreground: "#4A6376",
          primary: "#00335A",
          "primary-foreground": "#F4F7FA",
          accent: "#E9EFF4",
          "accent-foreground": "#00335A",
          border: "#DCE5ED",
          ring: "#0060AD",
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
