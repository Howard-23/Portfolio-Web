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
        "black-clover": {
          dark: "#0a0a0a",
          primary: "#1a1a2e",
          accent: "#e94560",
          gold: "#ffd700",
          silver: "#c0c0c0",
          bronze: "#cd7f32",
        },
        "black-clover-dark": "#0a0a0a",
        "black-clover-primary": "#1a1a2e",
        "e94560": "#e94560",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "clover-pattern": "url('/clover-bg.svg')",
      },
      animation: {
        "code-typing": "typing 3.5s steps(40, end)",
        "blink-caret": "blink-caret 0.75s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#e94560" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px #e94560, 0 0 10px #e94560" },
          "50%": { boxShadow: "0 0 20px #e94560, 0 0 30px #e94560" },
        },
        "slide-up": {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
