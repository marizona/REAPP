module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: () => ({
        "logo": "url('/src/images/logo.jpg')",
        "background":"url('/src/images/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@themesberg/flowbite/plugin')],
};
