import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['selector', '[data-mode="light"]'],
  content: [
    '../../node_modules/flowbite/**/*.js',
    '../../node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          1: '#25292D',
          2: '#7E3AF2',
          3: '#008000',
          4: '#cccc00',
          5: '#ff0000',
          6: '#111827',
          7: '#CFC1FF',
          8: '#4F3267',
          9: '#EDDFFF',
          10: '#8863FB',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
export default config;
