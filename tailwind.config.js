/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "custome-blue": "#00BAFF",
        "custome-burble": "#6336FA",
        "freshy-green": "#6CA12B",
        "freshy-grey-200": "#C5C5C5",
        "freshy-grey-400": "#8F8E8E",
        "freshy-grey-800": "#262626",
      },
    },
    fontFamily: {
      poppins: ["poppins,sans-serif"],
    },
  },
  plugins: [],
};
