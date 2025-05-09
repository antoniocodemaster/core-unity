/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4b66a5',
        'primary-dark': '#3a5081',

        success: '#54aa76',
        'success-dark': '#418b5f',

        warning: '#d09545',
        'warning-dark': '#a97332',

        danger: '#f55a4d',
        'danger-dark': '#cf4c40',

        info: '#88b0ed',
        'info-dark': '#6d93ce',
        'info-light': '#e5ebf5',

        'gray-100': '#dbdad9',
        'gray-100-dark': '#b5b4b3',
      },
    },
  },
  plugins: [],
};
