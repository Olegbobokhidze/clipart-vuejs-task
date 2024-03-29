/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '360px',
        tablet: '1024px',
        small: '1240px',
        large: '1920px'
      }
    }
  },
  plugins: []
}
