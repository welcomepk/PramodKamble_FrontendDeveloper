/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/bg_spacex.jpg')",
      },
      backgroundSize: {
        '50%': '50%',
        '100%': '100% 100%',
      },
      backgroundColor: {
        'transparent-30': "rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

