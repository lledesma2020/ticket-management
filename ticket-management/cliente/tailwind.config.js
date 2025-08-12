/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
    "./*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom AssistCargo colors
        "assistcargo-green": {
          DEFAULT: "#4CAF50", // Main green from the logo/screenshot
          dark: "#388E3C", // A darker shade for hover/active states
        },
        "assistcargo-gray": {
          DEFAULT: "#333333", // Dark gray for text/accents
          light: "#F5F5F5", // Light gray for backgrounds
        },
        // Shadcn/ui colors mapped to the new palette
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "240 10% 3.9%", // Dark Gray
        primary: {
          DEFAULT: "122 39% 49%", // HSL for #4CAF50 (AssistCargo Green)
          foreground: "0 0% 98%", // White
        },
        secondary: {
          DEFAULT: "240 4.8% 95.9%", // Light Gray
          foreground: "240 5.9% 10%", // Dark Gray
        },
        destructive: {
          DEFAULT: "0 84.2% 60.2%",
          foreground: "0 0% 98%",
        },
        muted: {
          DEFAULT: "240 4.8% 95.9%",
          foreground: "240 3.8% 46.1%",
        },
        accent: {
          DEFAULT: "240 4.8% 95.9%",
          foreground: "240 5.9% 10%",
        },
        popover: {
          DEFAULT: "0 0% 100%",
          foreground: "240 10% 3.9%",
        },
        card: {
          DEFAULT: "0 0% 100%",
          foreground: "240 10% 3.9%",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
