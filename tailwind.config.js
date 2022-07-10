/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    linearBorderGradients: (theme) => ({
      colors: {
        oceany: ["#0081f7", "#00AAEB"],
      },
      background: {
        black: "#000",
        white: "#fff",
      },
    }),
    extend: {
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-0.6rem)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "float-1": "float 3s 1.5s linear infinite",
        "float-2": "float 3s linear infinite",
        "float-3": "float 3s 1.5s linear infinite",
        "float-4": "float 3s linear infinite",
        "float-5": "float 3s 1.5s linear infinite",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      colors: {
        "light-blue": "#00AAEB",
        "dark-blue": "#0081f7",
        darkgray: "#24292F",
        buttongrey: "#6C798F",
        textgrey: "#6B7280",
        bleugry: "#4E699E",
        darker: "#001A31",
      },
      spacing: {
        3.7: "0.9375rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        8.4: "2.17875rem",
        8.5: "2.1875rem",
        13: "3.125rem",
        15: "3.75rem",
        17: "4.4375rem",
        22: "5.625rem",
        25: "6.25rem",
        26: "6.4475rem",
        30: "7.5rem",
        31: "7.875rem",
        33: "8.3125rem",
        35: "8.75rem",
        35.5: "8.9375rem",
        37: "9.375rem",
        38: "9.5rem",
        52.5: "13.125rem",
        61: "15.625rem",
        67: "15rem",
        68: "17.95875rem",
        72.5: "19.75rem",
        95: "23.125rem",
        100: "25rem",
        102: "25.45625rem",
        110: "30.41125rem",
        112: "36.725rem",
        125: "40.5rem",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      fontFamily: {
        inter: ["Inter"],
        bebas: ["Bebas Neue"],
      },
      fontSize: {
        heading: ["3.25rem", "3.5625rem"],
        buttonText: ["1rem", "0.875rem"],
        roadTitle: ["0.875rem", "1.125rem"],
        roadYear: ["0.875rem", "0.875rem"],
        roadQuarter: ["2.875rem", "2.875rem"],
        roadDesc: ["0.625rem", "1rem"],
        visionHead: ["1.25rem", "1.4375rem"],
        visionDesc: ["0.875rem", "1.3125rem"],
        memberHead: ["1rem", "1.536875rem"],
      },
    },
  },
  plugins: [],
};