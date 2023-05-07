/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1300px',
    },

    fontFamily: {
      brushwell: ['Brushwell', 'cursive'],
      redvelvet: ['RedVelvet', 'serif'],
      louis: ['LouisGeorgeCafe', 'sans'],
      nextart: ['NextArtLight', 'sans'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        blacktr: '#000000dd',
      },
    },
  },
  plugins: [],
};
