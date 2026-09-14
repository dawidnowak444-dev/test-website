import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { paper: "#F1EFE9", ink: "#141412", acid: "#D9FF43" },
      fontFamily: { sans: ["var(--font-manrope)"], serif: ["var(--font-cormorant)"] },
    },
  },
  plugins: [],
} satisfies Config;
