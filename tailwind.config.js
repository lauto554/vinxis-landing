/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        softPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.8s ease-out both",
        "fade-in-up": "fadeInUp 0.8s ease-out 0.2s both",
        "fade-in-up-late": "fadeInUp 0.8s ease-out 0.4s both",
        blink: "blink 1.5s ease-in-out infinite",
        "soft-pulse": "softPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
