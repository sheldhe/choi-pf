/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./assets/img/main_img.png')",
        main01: "url('./assets/img/main_img01.png')",
        inquiry01: "url('./assets/img/inquiry_img.png')",
        com_md: "url('./assets/img/com_mobiledoctor.png')",
        com_cocoa: "url('./assets/img/com_cocoa.png')",
        com_soribada: "url('./assets/img/com_soribada.png')",
        com_mcircle: "url('./assets/img/com_mcircle.png')",
        com_ion: "url('./assets/img/com_ion.svg')",
        pro_web: "url('./assets/img/pro_web.png')",
      },
      spacing: {
        160: "40rem",
      },
      maxHeight: {
        128: "32rem",
      },
      fontFamily: {
        yd: ["Yeongdeok-Snow-Crab", "sans-serif"],
        gy: ["Gwangyang-Sunshine-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
