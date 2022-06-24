/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const radix = require('tailwindcss-radix')()

module.exports = {
  content: ['./src/**/*.{ts,js,tsx,jsx}'],
  plugins: [
    radix,
    plugin(({ addVariant }) => {
      addVariant('theme-dark', '.theme-dark &')
      addVariant('theme-light', '.theme-light &')
    }),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-light': 'var(--color-background-light)',
        'dark-500': 'var(--color-dark-500)',
        medium: 'var(--color-medium)',
        primary: 'var(--color-primary)',
      },
      dropShadow: {
        control: ['var(--color-shadow-control)', 'var(--color-shadow-control-sm)'],
      },
    },
  },
}
