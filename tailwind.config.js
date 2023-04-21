/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0079FF',
        red: '#F74646',
        'primary-hover': '#60ABFF',
        'grayish-blue': '#697C9A',
        blue: '#4B6A9B',
        dark: '#2B3442',
        'light-gray': '#F6F8FF',
        'snow-white': '#FEFEFE',
        'very-dark-blue': '#141D2F',
        'dark-blue': '#1E2A47'
      },
      boxShadow: {
        card: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
      }
    },
    fontFamily: {
      mono: ['Space Mono', 'monospace']
    },
    fontSize: {
      h1: '1.625rem',
      h2: '1.375rem',
      h3: '1rem',
      h4: '0.8125rem',
      body: '0.9375rem'
    },
    lineHeight: {
      h1: '2.375rem',
      h2: '2.0625rem',
      h3: '1.5rem',
      h4: '1.25rem',
      body: '1.5625rem'
    },
    borderRadius: {
      md: '15px',
      sm: '10px',
      full: '50%'
    },
    screens: {
      md: '768px',
      xl: '920px'
    }
  },
  plugins: []
}
