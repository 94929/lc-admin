/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** 브랜드 컬러 */
        main: "#F8981D",
        main_2: "#FFE5BD",
        /** grayscale 화이트 - 블랙톤 */
        gs_1: "#454655",
        gs_2: "#787880",
        gs_3: "#999999",
        gs_4: "#CACACA",
        gs_5: "#DDE1E5",
      },
      /** 폰트사이즈 rem 으로 정의하면 나중에 반응형 할때 적용하기 편해요 */
      fontSize: {
        12: "0.75rem",
        13: "0.812rem",
        14: "0.875rem",
        15: "0.938rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        26: "1.625rem",
        30: "1.875rem",
        34: "2.125rem",
        40: "2.5rem",
        50: "3.125rem",
      },
      borderRadius: {
        3: "3px",
        5: "5px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
