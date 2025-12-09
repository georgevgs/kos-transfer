/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
      colors: {
        background: 'oklch(0.99 0.002 240)',
        foreground: 'oklch(0.15 0.02 240)',
        card: 'oklch(1 0 0)',
        'card-foreground': 'oklch(0.15 0.02 240)',
        primary: 'oklch(0.25 0.08 240)',
        'primary-foreground': 'oklch(0.99 0.002 240)',
        muted: 'oklch(0.96 0.005 240)',
        'muted-foreground': 'oklch(0.45 0.02 240)',
        accent: 'oklch(0.70 0.15 75)',
        'accent-foreground': 'oklch(0.15 0.02 240)',
        border: 'oklch(0.90 0.005 240)',
        input: 'oklch(0.90 0.005 240)',
        ring: 'oklch(0.70 0.15 75)',
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
    },
  },
  plugins: [],
}
