import type { Config } from "tailwindcss";
import { stars } from "./app/components/starsBackground";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#070722",
      },
      boxShadow: {
        "stars-background": stars, // Adjust values as needed
      },
    },
  },
  plugins: [],
};
export default config;
