import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        // 🔥 Add this new keyframe for looping text animation
        "word-fade": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "20%": { opacity: "1", transform: "translateY(0)" },
          "80%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" }
        }
      },
      animation: {
        "zoom-in": "zoom-in 1.5s ease-out forwards",
        // 🔥 Add this new animation
        "word-fade": "word-fade 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
