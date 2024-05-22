/** @type {import('tailwindcss').Config} */

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
      backgroundImage: {
        banner: 'url("https://res.cloudinary.com/dp8tnvemu/image/upload/v1716170429/sadbois_banner/banner1_gqynfe.png")',
        stadium: 'url("https://res.cloudinary.com/dp8tnvemu/image/upload/v1716178967/sadbois_banner/stad3_ly7cui.jpg")'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cupcake: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['business']
        }
      }
    ]
  }
};
