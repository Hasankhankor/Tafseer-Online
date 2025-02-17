module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quran: ["QURAN", "sans-serif"],
      },
      colors: {
        gold: {
          500: "#c8a32e", // Primary gold color
          400: "#e1b74e", // Lighter gold
        },
        green: {
          900: "#1b2e20", // Deep Islamic green
          700: "#235237", // Softer green for accents
        },
        beige: "#f3f0e6", // Soft beige background
      },
    },
  },
  plugins: [],
};
