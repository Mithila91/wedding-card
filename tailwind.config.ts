import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      heading: ["var(--ballroom)", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: "0",
      screens: {
        "2xl": "1310px",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      destructive: "#EA4A67",
      gradientPrimary: "#7758BA",
      gradientSecondary: "#978BB3",
      primary: {
        100: "#F1E6DC",
   
      },
      burnt: {
        800: "#96532B",
      },
      forest: {
        800: "#444A3B",
      },
    },
    extend: {
      inset: {
        '-50': '-50px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      dropShadow: {
        popover: "0px 8px 24px rgba(32, 48, 64, 0.16)",
      },
      boxShadow: {
        filter: "0px 4px 8px 0px rgba(32, 48, 64, 0.04)",
        menu: "0px 4px 16px 0px rgba(32, 48, 64, 0.04)",
        hover: "0px 0px 24px rgba(16, 32, 48, 0.08)",
        dataTable: "0px 8px 24px 0px rgba(16, 32, 48, 0.16)",
        custom: "0px 8px 40px 0px rgba(0, 16, 32, 0.08)",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
      },
      letterSpacing: {
        costum: "3.6px",
      },
      borderRadius: {
        10: "10px",
        12: "12px",
        15: "15px",
        20: "20px",
        40: "40px",
        80: "80px",
        160: "160px",
      },
      backgroundImage: {
        "image-layer":
          "linear-gradient(180deg, #203040 0%, rgba(0, 0, 0, 0.00) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "admin-gradient":
          "linear-gradient(180deg, #203040 0%, #001020 77.14%);",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-left": {
          from: { transform: "translateX(90%)" },
          to: { transform: "translateX(-90%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-left": "slide-left 30s linear infinite",
      },
      extend: {
        maskImage: {
          gradient:
            "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        },
      },
    },
    variants: {
      extend: {
        maskImage: ["responsive"],
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
export default config;
