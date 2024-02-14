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
        banner: 'url("/Assets/Banners/banner1.png")',
        stadium: 'url("/Assets/Banners/stadium2.jpeg")'
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
