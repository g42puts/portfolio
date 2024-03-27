/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 3s steps(80) forwards',
      },
    },
  },
  plugins: [],
}