import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '0', transform: 'translateY(0px)' },
        },
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 400s cubic-bezier(0.16, 1, 0.3, 1)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },
  },
  plugins: [],
}
export default config
