/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        veryDarkBlue: "hsl(207, 26%, 17%)",
        darkBlue: "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};
