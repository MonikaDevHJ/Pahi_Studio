import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes :{
        'zoom-in' :{
          '0%' : {transform: 'scale(1.2)', opacity : "0"},
           '100%': { transform: 'scale(1)', opacity: '1' },

        },
      },
      animation:{
        "zoom-in" : 'zoom-in 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
