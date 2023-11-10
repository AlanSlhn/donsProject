/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js ,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#0B2447',
        bgColor2: '#144272',
        gradient1: '#02AABD',
        gradient2: '#00CDAC',
        gradient3: '#D8B5FF',
        gradient4: '#1EAE98',
      },
    },
  },
  plugins: [],
};
