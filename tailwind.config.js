/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    colors: {
      'dark-text': '#eceff4',
      'dark-background': '#2f3541',
      'dark-primary': '#5d81ac',
      'dark-secondary': '#4d566a',
      'dark-accent': '#b48ead',
       'text': '#2f3541',
       'background': '#e5e9f0',
       'primary': '#4f94e8',
       'secondary': '#d8dee9',
       'accent': '#9c689c',
    },
    fontFamily: {
      header: ["Rubik", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "3xl": "2400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}