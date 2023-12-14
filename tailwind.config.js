import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        link: '#000' // Define a new utility class `.text-link-black`
      }
    }
  },
  plugins: [daisyui]
};
