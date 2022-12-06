/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#021145",
        blue: colors.blue,
        light: "#00AEEF",
      },
      "side-green": "#002604",
      "side-light": "#005309",
      "dash-white": "#F9F9F9",
      "tx-dark": "#111827",
      "tx-light-dark": "#6B7280",
      "outline-gray": "#E5E7EB",
      gray: colors.gray,
      white: colors.white,
      lavender: "#e9e9ea",
      beige: "#e9fae2",
      black: "#000000",
      neutral: "#D1D5DB",
      accentBlue: "#50C8FC",
      secondary: "#00AEEF",
      grayBg: "#F9F9F9",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: 'url("/img/home/hero-bg.svg")',
        product: 'url("/img/home/product-bg.svg")',
        cta: 'url("/img/home/cta-bg.png")',
        faq: 'url("/img/faqs/faq-curve.svg")',
        faqHero: 'url("/img/faqs/faq-hero.svg")',
        careerBg: 'url("/img/career/career-bg.svg")',
        careerForm: 'url("/img/career/career-form-bg.svg")',
        productBg: 'url("/img/products/product-bg.svg")',
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
