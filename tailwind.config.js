/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx}',
    './index.html'

],
  theme: {
    
    
    extend: {
        fontFamily: {
          montserrat: ['"Montserrat"', 'sans-serif'],
        },
        colors: {
          primary: {
           DEFAULT: "#1CBC9C"
          }
        },
        height: {
          '70vh': '70vh', // Add this line for 70vh height
        },
        minHeight: {
          '70vh': '70vh', // Add this line for 70vh min-height
        }
        
    },
  },
  plugins: [],
}

