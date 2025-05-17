// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-10": "var(--color-primary-10)",
        "primary-20": "var(--color-primary-20)",
        secondary: "var(--color-secondary)",
        "secondary-10": "var(--color-secondary-10)",
        "secondary-20": "var(--color-secondary-20)",
        background: "var(--color-background)",
        "background-light": "var(--color-background-light)",
        "background-lighter": "var(--color-background-lighter)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-secondary-light": "var(--color-text-secondary-light)",
        "text-white": "var(--color-text-white)",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
        sans: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "system-ui",
          "sans-serif",
        ],
      },
      zIndex: {
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
