import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#030516",
        secondaryBackground: "rgb(7, 22, 38)",
        linearBackground: "rgba(12, 38, 69, 0)",
        linearBackground2: "rgba(7, 22, 38, 0)",
        textColorFooter: "rgb(179, 208, 242)",
        menuBackground: "rgb(3, 5, 22)",
        accent: "#60a6e7",
        darkGrey: "#aea9b1",
        lightGrey: "#e6e0e9",
      },
      fontFamily: {
        sans: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
