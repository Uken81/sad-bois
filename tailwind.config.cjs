/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    themes: [
      {
        // mytheme: {
        //   // Replace 'mytheme' with your theme name
        //   // primary: 'linear-gradient(90deg, #facc15, #000)'
        //   primary: '#facc15',
        //   backgroundColor: '#facc15'
        //   // ... other color settings
        // }
        mytheme: {
          primary: '#a991f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff'
        }
      }
      // ... other themes
    ],
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
          ...require('daisyui/src/theming/themes')['cupcake'],
          primary: 'black',
          secondary: 'white'
          // backgroundColor: '#fefce8'
        }
      }
    ]
  }
};
