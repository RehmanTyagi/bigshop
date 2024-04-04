/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hoverRgba': 'var(--hoverRgba)',
        'primaryColor': 'var(--primaryColor)',
        'secondaryColor': 'var(--secondaryColor)',
        'tertiaryColor': 'var(--tertiaryColor)',
        'quaternaryColor': 'var(--quaternaryColor)',
        'quinaryColor': 'var(--quinaryColor)',
        'senaryColor': 'var(--senaryColor)',
        'septenaryColor': 'var(--septenaryColor)',
        'octonaryColor': 'var(--octonaryColor)',
        'nonaryColor': 'var(--nonaryColor)',
        'denaryColor': 'var(--denaryColor)',
      },
      backgroundImage: {
        'loginBG': 'url(../assets/images/backgroundImg.jpg)',
      },
    },
  },
  plugins: [],
}

