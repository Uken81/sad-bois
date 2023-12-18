import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        link: '#000'
      },
      backgroundImage: {
        backgroundLogo: 'url("../public/Assets/logo1.png")'
      }
    }
  },
  plugins: [daisyui]
};
