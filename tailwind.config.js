/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        primaryText: '#f7f7f7',
        green: "#28e98c",
        yellow: "#e4af12",
        orange: "#fe6f1d",
        cyan: "#14c5fd",
        grayMain: "#c0c0c0",
        blue: "#1338f3",
        red: "#f31313",
        pink: "#ff99cc",
        'th-primary-text': 'var(--primary-text)',

      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}

