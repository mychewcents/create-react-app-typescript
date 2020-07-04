const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.tsx'],
  variants: { cursor: ['responsive', 'hover', 'focus'] },
  plugins: [require('@tailwindcss/ui')],
};
