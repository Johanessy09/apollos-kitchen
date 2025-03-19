/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1a3c34',
          'primary-foreground': '#ffffff',
          background: '#f9f9f9',
        },
      },
    },
    plugins: [],
  };