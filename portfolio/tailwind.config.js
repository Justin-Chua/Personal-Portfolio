/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "earth-beige-dark": "#DDCBB7",
      "earth-beige-light": "#E1D8B3",
      "earth-brown-dark": "#7B4B36",
      "earth-brown-light": "#8E5D44",
      "earth-green": "#325D41",
      "earth-grey": "#333333",
      "earth-white": "#F4F4F4",
      "earth-yellow-dark": "#F7E890",
      "earth-yellow-light": "#F9EFA5"
    },
    extend: {
      fontFamily: {
        caladea: ["Caladea", "sans-serif"],
        koulen: ["Koulen", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "minimalist-home": "linear-gradient(to bottom, transparent, rgba(244, 244, 244, 0.5)), url('/resources/images/minimalist_home_bg.jpg')"
      }
    },
  },
  plugins: [],
}

