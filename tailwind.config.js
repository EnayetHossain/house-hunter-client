/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgb(var(--primary-color))",
        "secondary-color": "rgb(var(--secondary-color))",
        "accent-color": "rgb(var(--accent-color))",
      },
    },
  },
  plugins: [],
};
