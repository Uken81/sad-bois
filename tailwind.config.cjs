/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
// import plugin from 'tailwindcss/plugin';
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.25rem'
      },
      fontWeight: {
        h1: '700',
        h2: '600',
        h3: '500'
      },
      // textShadow: {
      //   // DEFAULT: '0 2px 4px #000',
      //   sm: '0 2px 2px #000',
      //   lg: '0 4px 10px #000'
      // },
      backgroundImage: {
        backgroundLogo: 'url("../public/Assets/logo1.png")',
        stadium: 'url("../public/Assets/Banners/stadium2.jpeg")'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['business']
          // primary: 'black',
          // secondary: 'white'
          // backgroundColor: '#fefce8'
        }
      }
      // plugin(function ({ matchUtilities, theme }) {
      //   matchUtilities(
      //     {
      //       'text-shadow': (value) => ({
      //         textShadow: value
      //       })
      //     },
      //     { values: theme('textShadow') }
      //   );
      // })
    ]
  }
};
