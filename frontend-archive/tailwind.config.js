/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      "dropShadow": {
        "3xl": '0 35px 35px rgba(0, 0, 0, 0.5)',
        "4xl": '0 45px 45px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}

