// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Garamond', ...defaultTheme.fontFamily.serif],
      sans: ['Avenir', 'Open Sans', ...defaultTheme.fontFamily.sans],
      mono: ['Lato, sans-serif'],
    },
    extend: {
      colors: {
        primary: '#7B14D1',
        secondary: '#C320D6',
        muted: '#F7F6F9',
        orange: '#FFB65C',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            // fontFamily: theme('fontFamily.sans'),
            'h1, h2': {
              fontSize: 44,
              fontWeight: theme('fontWeight.extrabold'),
              letterSpacing: theme('letterSpacing.tighter'),
              // fontFamily: theme('fontFamily.heading'),
            },
            'h3, h4': {
              fontWeight: theme('fontWeight.bold'),
              lineHeight: theme('lineHeight.tight'),
            },
            pre: {
              backgroundColor: '#011627',
            },
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
