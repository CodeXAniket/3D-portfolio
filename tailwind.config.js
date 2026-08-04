/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0f",
        surface: "#12121a",
        wire: "rgb(255 176 32 / <alpha-value>)",
        cyan: "rgb(76 201 240 / <alpha-value>)",
        pink: "rgb(230 76 154 / <alpha-value>)",
        green: "rgb(82 227 164 / <alpha-value>)",
        purple: "rgb(155 140 255 / <alpha-value>)",
        gold: "rgb(255 209 102 / <alpha-value>)",
        ink: "#e9e9ee",
        "ink-dim": "#9a9aa5",
        "ink-faint": "#6a6a76",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        mono2: ["'VT323'", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        "neon-cyan": "0 0 0 1px rgba(76,201,240,.15), 0 0 24px -8px rgba(76,201,240,.35)",
        "neon-pink": "0 0 0 1px rgba(247,37,133,.15), 0 0 24px -8px rgba(247,37,133,.35)",
        "neon-green": "0 0 0 1px rgba(82,227,164,.15), 0 0 24px -8px rgba(82,227,164,.35)",
        "neon-gold": "0 0 0 1px rgba(255,176,32,.15), 0 0 24px -8px rgba(255,176,32,.35)",
      },
    },
  },
  plugins: [],
};
