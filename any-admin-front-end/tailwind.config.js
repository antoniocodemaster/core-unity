/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4b66a5',
        success: '#54aa76',
        warning: '#d09545',
        danger: '#f55a4d',
        'danger-dark': '#cf4c40',
        info: '#88b0ed',
        'gray-100': '#dbdad9',
      },
    },
  },
  plugins: [],
};
