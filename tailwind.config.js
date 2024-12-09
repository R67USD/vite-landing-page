// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1438px",
        },
      },
      colors: {
        purple: {
          primary: "#4B144B",
          dark: "#310A31",
          darker: "#420042",
          card: "#5D2B5D",
        },
        maroon: {
          dark: "#431443",
          darker: "#330033",
        },
        orange: {
          primary: "#FFAE00",
          light: "#FFCC5C",
          400: "#FFB74D",
          500: "#FF9F1C",
        },
      },
      backgroundImage: {
        "yellow-gradient": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      gradientColorStops: (theme) => ({
        "yellow-start": "#FFDF72",
        "yellow-end": "#EAC64B",
      }),
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        petrov: ["Petrov Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
