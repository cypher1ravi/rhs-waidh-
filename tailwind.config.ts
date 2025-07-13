import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Theme colors - gradients
    "from-blue-600",
    "to-indigo-600",
    "from-green-600",
    "to-emerald-600",
    "from-purple-600",
    "to-violet-600",
    "from-orange-600",
    "to-red-600",
    "from-red-600",
    "to-pink-600",
    // Text colors
    "text-blue-600",
    "text-indigo-600",
    "text-green-600",
    "text-emerald-600",
    "text-purple-600",
    "text-violet-600",
    "text-orange-600",
    "text-red-600",
    "text-pink-600",
    // Background colors
    "bg-blue-600",
    "bg-indigo-600",
    "bg-green-600",
    "bg-emerald-600",
    "bg-purple-600",
    "bg-violet-600",
    "bg-orange-600",
    "bg-red-600",
    "bg-pink-600",
    // Background opacity
    "bg-blue-600/10",
    "bg-green-600/10",
    "bg-purple-600/10",
    "bg-orange-600/10",
    "bg-red-600/10",
    "bg-blue-600/20",
    "bg-green-600/20",
    "bg-purple-600/20",
    "bg-orange-600/20",
    "bg-red-600/20",
    // Border colors
    "border-blue-600",
    "border-indigo-600",
    "border-green-600",
    "border-emerald-600",
    "border-purple-600",
    "border-violet-600",
    "border-orange-600",
    "border-red-600",
    "border-pink-600",
    // Hover colors
    "hover:bg-blue-50",
    "hover:bg-green-50",
    "hover:bg-purple-50",
    "hover:bg-orange-50",
    "hover:bg-red-50",
    "hover:bg-blue-600/5",
    "hover:bg-green-600/5",
    "hover:bg-purple-600/5",
    "hover:bg-orange-600/5",
    "hover:bg-red-600/5",
    // Font families
    "font-sans",
    "font-poppins",
    "font-playfair",
    "font-roboto",
    "font-montserrat",
  ],
}

export default config
