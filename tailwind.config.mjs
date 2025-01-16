/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#286291",
        },
        secondary: "#3cb043",
      },
      fontFamily:{
        poppins: ["Poppins"],
        "poppins-bold": ["Poppins-Bold"]
      }
    },
  },
  plugins: [],
};
