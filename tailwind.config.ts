import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-dark": "#3B3B3B",
        "neutral-medium": "#737373",
        "neutral-border": "#8F8F8F",
        "neutral-disabled": "#D4D4D4",
        "neutral-light": "#EEEEEE",
        "neutral-extra-light": "#EFEDF3",
        primary: "#585660",
        "primary-hover": "#3E3C44",
        danger: "#d04343",
        "danger-hover": "#f64f4f4d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "400px", // small mobile
      },
      fontSize: {
        "2xl": [
          "36px",
          {
            lineHeight: "40px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        xl: [
          "24px",
          {
            lineHeight: "28px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        xs: [
          "20px",
          {
            lineHeight: "24px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        ag: [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        lg: [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        "button-desktop": [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "700",
          },
        ],
        "button-mobile": [
          "14px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "700",
          },
        ],
        "tag-desktop": [
          "16px",
          {
            lineHeight: "16px",
            letterSpacing: "0.4px",
            fontWeight: "400",
          },
        ],
        body2: [
          "14px",
          {
            lineHeight: "16px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
