const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "primary": {
          50: "#FFF5E6",
          100: "#FEEDD2",
          200: "#FEDA9F",
          300: "#FDC872",
          400: "#FDB440",
          500: "#FCA311",
          600: "#D48303",
          700: "#A16402",
          800: "#6A4201",
          900: "#372201",
          950: "#191000"
        },
        "eerie": {
          50: "#E9E9E7",
          100: "#D3D3CF",
          200: "#AAAAA1",
          300: "#7E7E72",
          400: "#505049",
          500: "#20201D",
          600: "#1B1B18",
          700: "#131311",
          800: "#0D0D0C",
          900: "#050505",
          950: "#030302"
        },
        "alabaster": {
          50: "#FDFDFC",
          100: "#F8F8F7",
          200: "#F3F4F1",
          300: "#ECEDE8",
          400: "#E7E8E3",
          500: "#E0E2DB",
          600: "#B6BBAA",
          700: "#8A9277",
          800: "#5D6350",
          900: "#2D3027",
          950: "#181914"
        },
      },
      fontFamily: {
        'sans': ['"Montserat"', ...defaultTheme.fontFamily.sans],
        'title': ['"League Spartan"', 'Roboto'],
      },
    },
  },
  plugins: [],
}

