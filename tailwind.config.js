/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#669966",
        },
        yellow: {
          400: "#CC9933",
        },
        gray: {
          400: "#999999",
        }
      },
      
    },
  },
  plugins: [],
  darkMode: 'class',
}

