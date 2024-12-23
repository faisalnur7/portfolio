/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: "#d2691e",
        chocolate_light: "#f08437",
        custom_navy: "#111827",
      },
      animation: {
        "spin-around": "spin 3s linear infinite",
        "shimmer-slide": "slide 3s linear infinite",
        gradient: "gradientAnimation 8s ease infinite", // Added new animation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%", // Added for gradient animation
      },
    },
  },
  plugins: [daisyui],
};
