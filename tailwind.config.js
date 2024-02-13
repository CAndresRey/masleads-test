/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cascadia Code', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
    colors: {
      theme: {
        50: '#FDF2F5',
        100: '#FBE4EB',
        200: '#F7C5D5',
        300: '#F2A1BB',
        400: '#EB6B93',
        500: '#C41B50',
        600: '#AF1848',
        700: '#9D1640',
        800: '#7E1134',
        900: '#630E29',
        950: '#360716',
      },
    },
  },
  plugins: [],
};
