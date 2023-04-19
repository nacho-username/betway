/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'betway-green': '#439539',
        'betway-live': '#A6BE45',
        'betway-casino': '#3D9CC3',
        'betway-esports': '#9411C0',
        'betway-vegas': '#9D2344',
      },
    },
  },
  plugins: [],
}
