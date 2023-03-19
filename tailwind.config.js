/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.5rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "2rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["2rem", { lineHeight: "3rem" }],
    "4xl": ["2.5rem", { lineHeight: "3rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "background-color": "E2E2E2",
        "primary-green": "#008000",
        "primary-blue": "#1C63D5",
      },
      height: {
        88: "22rem",
        100: "25.5rem",
        104: "27rem",
        108: "29rem",
        112: "31rem",
        116: "33rem",
        120: "35rem",
        124: "37rem",
        128: "40rem",
        132: "42rem",
        136: "45rem",
      },
      width: {
        76: "19.5rem",
        88: "22rem",
        100: "25.5rem",
        104: "27rem",
        108: "29rem", // Add new height h-108
        112: "31rem",
        116: "33rem",
        120: "35rem",
        124: "37rem",
        128: "40rem",
        132: "42rem",
        136: "45rem",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      extend: {
        animation: {
          "fade-in": "fade-in 0.5s linear forwards",
          marquee: "marquee var(--marquee-duration) linear infinite",
          "spin-slow": "spin 4s linear infinite",
          "spin-slower": "spin 6s linear infinite",
          "spin-reverse": "spin-reverse 1s linear infinite",
          "spin-reverse-slow": "spin-reverse 4s linear infinite",
          "spin-reverse-slower": "spin-reverse 6s linear infinite",
        },
        keyframes: {
          "fade-in": {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          marquee: {
            "100%": {
              transform: "translateY(-50%)",
            },
          },
          "spin-reverse": {
            to: {
              transform: "rotate(-360deg)",
            },
          },
        },
        borderRadius: {
          "4xl": "2rem",
          "5xl": "2.5rem",
        },
        spacing: {
          "8xl": "96rem",
          "9xl": "128rem",
        },
      },
    },
  },
  plugins: [],
};
