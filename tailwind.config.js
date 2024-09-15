/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     
      background: '#ABC7DE',
      secondaryColor:'#dedcff',
      textColor:'#050315',
      accentColor:'#433bff',
      redColor:'#ef4444',
      'white':'#FFFFFF'
      
      // ...
    },
    extend: {},
  },
  plugins: [daisyui],
}