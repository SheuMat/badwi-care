import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Purple ──────────────────────────────────────────
        purple: {
          50:  "#F5F0FA",
          100: "#EDE6F8",
          200: "#DDD0F0",
          300: "#C4A8E0",
          400: "#9B72C8",
          500: "#7B4FA6",
          600: "#5A2A9A",
          700: "#3D1A6E",  // ← primary brand colour
          800: "#2D1057",
          900: "#1E0A3C",
          950: "#110520",
        },
        // ── Neutrals ──────────────────────────────────────────────
        grey: {
          50:  "#F8F7FC",
          100: "#F1EFF8",
          200: "#E5E2F0",
          300: "#C9C4DC",
          400: "#9E98B8",
          600: "#5A5475",
          800: "#2E2B40",
        },
        charcoal: "#1A1A2E",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft:  "0 2px 16px rgba(61,26,110,.08)",
        card:  "0 4px 24px rgba(61,26,110,.12)",
        lg:    "0 8px 40px rgba(61,26,110,.16)",
        xl:    "0 16px 60px rgba(61,26,110,.20)",
        glow:  "0 0 0 3px rgba(123,79,166,.18)",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(135deg, #1E0A3C 0%, #3D1A6E 50%, #5A2A9A 100%)",
        "hero-overlay":
          "linear-gradient(120deg, rgba(30,10,60,.88) 0%, rgba(61,26,110,.70) 55%, rgba(61,26,110,.25) 100%)",
        "card-gradient":
          "linear-gradient(135deg, #3D1A6E 0%, #5A2A9A 100%)",
        "lavender-gradient":
          "linear-gradient(135deg, #F5F0FA 0%, #EDE6F8 100%)",
      },
      animation: {
        "fade-up":    "fadeUp .7s ease forwards",
        "fade-in":    "fadeIn .5s ease forwards",
        "slide-left": "slideLeft .5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
