/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        3.7: "0.9375rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        15: "3.75rem",
        26: "6.4475rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};