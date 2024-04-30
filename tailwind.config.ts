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
        white: "#fff",
        black: "#000",
        dimgray: "#605c5c",
        gray: "#212121",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
      },
    },
    fontSize: {
      "2xs": "0.688rem",
      xl: "1.25rem",
      base: "1rem",
      "5xs": "0.5rem",
      "4xs": "0.563rem",
      inherit: "inherit",
    },
    screens: {
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
