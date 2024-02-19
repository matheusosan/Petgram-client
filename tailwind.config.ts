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
        "pet-bg": "#FFCDB2",
        "pet-primary": "#F39237",
        "pet-text": "#333333",
        "pet-contrast": "#E84A5F",
      },
      backgroundImage: {
        "login-bg": "url('/public/loginbg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
