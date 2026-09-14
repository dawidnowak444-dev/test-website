import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { cream: "#F7F4EE", ink: "#171714", gold: "#AE8B55", sand: "#DED2C0" },
      fontFamily: { sans: ["var(--font-manrope)"], serif: ["var(--font-cormorant)"] },
    },
  },
  plugins: [],
} satisfies Config;
