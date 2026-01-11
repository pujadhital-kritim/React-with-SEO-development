/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
 theme: {
  extend: {
    colors: {
      surface: {
        light: "#ffffff",
        dark: "#0f172a",
      },
      textbase: {
        light: "#0f172a",
        dark: "#f8fafc",
      },
      primary: "#22c55e",
    },
  },
},

};
