/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        jack: '#C4A164',
        queen: '#FFD689',
        king: 'FFD700',
        ace: '#E58632',
        joker: '#D8D8D8',
      },
    },
  },
  plugins: [],
};
