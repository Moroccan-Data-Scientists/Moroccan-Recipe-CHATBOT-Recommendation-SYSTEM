/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          100: "#f9f9f9",
          200: "#f7f7f8",
          300: "#f2f2f2",
          400: "rgba(249, 249, 249, 0.94)",
          500: "rgba(249, 249, 249, 0.5)",
        },
        gray: {
          100: "#878484",
          200: "#0e0e0e",
          300: "#040303",
          400: "#010101",
          500: "rgba(135, 132, 132, 0)",
          600: "rgba(0, 0, 0, 0.5)",
          700: "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        antiquewhite: "#e3dac9",
        gainsboro: {
          100: "#dfe3e8",
          200: "#d9d9d9",
          300: "rgba(217, 217, 217, 0)",
        },
        lightcoral: {
          100: "#f28080",
          200: "#f18080",
        },
        lightgray: "#d7d5d5",
        linen: "#ece9df",
        "dark-grey-400": "#212b36",
        blue: {
          100: "#7203ff",
          200: "#4200ff",
        },
        darkgray: "rgba(176, 176, 176, 0.09)",
        indianred: {
          100: "#ca6d6d",
          200: "#c45959",
        },
        darkslategray: "#404040",
        dimgray: {
          100: "#6e6b6b",
          200: "rgba(110, 107, 107, 0)",
        },
        silver: "rgba(191, 191, 191, 0)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        knewave: "Knewave",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "18xl": "37px",
        xl: "20px",
        "27xl": "46px",
        "39xl": "58px",
        "140xl": "159px",
        "17xl": "36px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      mini: "15px",
      mid: "17px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
