/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "slices/**/*.vue",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    // "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "light-green": {
          DEFAULT: "#999A5B",
          50: "#F5F6EF",
          100: "#ECECDF",
          200: "#D7D7BC",
          300: "#C4C49C",
          400: "#AFAF78",
          500: "#999A5B",
          600: "#797A48",
          700: "#5C5D37",
          800: "#3C3D24",
          900: "#202013",
        },
        sand: {
          DEFAULT: "#EEE9E1",
          50: "#FDFDFC",
          100: "#FBFAF8",
          200: "#F8F5F2",
          300: "#F4F1EB",
          400: "#F2EEE8",
          500: "#EEE9E1",
          600: "#CDBFA7",
          700: "#AA9169",
          800: "#756242",
          900: "#3B3121",
        },
        brown: {
          DEFAULT: "#C1B08F",
          50: "#FDF9F2",
          100: "#FAF1E1",
          200: "#F1E2C6",
          300: "#E5D4B3",
          400: "#D5C3A0",
          500: "#C1B08F",
          600: "#B69759",
          700: "#997733",
          800: "#6A4F1B",
          900: "#38290A",
        },
        swamp: {
          DEFAULT: "#ACB78E",
          50: "#F6F8F2",
          100: "#F0F2E8",
          200: "#DEE3CE",
          300: "#CED6B8",
          400: "#BDC7A3",
          500: "#ACB78E",
          600: "#90A064",
          700: "#6D7A48",
          800: "#48512E",
          900: "#262B17",
        },
        olive: {
          DEFAULT: "#5F5D40",
          50: "#F2F1E8",
          100: "#E5E3D2",
          200: "#C9C7A6",
          300: "#AFAC7E",
          400: "#8B885A",
          500: "#5F5D40",
          600: "#4D4C32",
          700: "#3C3A25",
          800: "#262517",
          900: "#13130B",
        },
        fallow: {
          DEFAULT: "#AF7B4B",
          50: "#F8F2EC",
          100: "#F1E5DA",
          200: "#E3CBB5",
          300: "#D3AF8D",
          400: "#C2956B",
          500: "#AF7B4B",
          600: "#8D623A",
          700: "#6A4929",
          800: "#4A321C",
          900: "#25190E",
        },
        primary: {
          DEFAULT: "#ACB78E",
          50: "#F6F8F2",
          100: "#F0F2E8",
          200: "#DEE3CE",
          300: "#CED6B8",
          400: "#BDC7A3",
          500: "#ACB78E",
          600: "#90A064",
          700: "#6D7A48",
          800: "#48512E",
          900: "#262B17",
        },
        black: "#2c2c2c",
      },
      fontFamily: {
        body: "Raleway",
        boysand: "Boysand",
        barlow: "Barlow",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    // require("@tailwindcss/typography"),
    // ...
  ],
};
