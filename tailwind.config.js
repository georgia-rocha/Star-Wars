/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundStar': "url(\'/star-wars.svg\')",
    },
    },
  },
  plugins: [],
}

