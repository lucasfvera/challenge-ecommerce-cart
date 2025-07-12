import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2xl": [
          "36px",
          {
            lineHeight: "40px",
            letterSpacing: "0.4px",
            fontWeight: "700",
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
