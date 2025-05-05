import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'meg-pink': {
          DEFAULT: '#F472B6', // Main Pink from logo text/background
          '600': '#EC4899', // Slightly darker for headings/accents
        },
        'meg-beige': {
          DEFAULT: '#FEF3C7', // Light beige background (similar to dog fur)
          '100': '#FFFBEB', // Even lighter beige for main background
        },
        'meg-blue': {
          DEFAULT: '#A5F3FC', // Light blue from bows
        },
        'meg-dark': {
          DEFAULT: '#1F2937', // Dark green/gray from outline/text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        heading: ["var(--font-fredoka)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

