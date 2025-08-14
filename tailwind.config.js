module.exports = {
  theme: {
    extend: {
      colors: {
        "portfolio-blue": "#2563eb",
        "portfolio-blue-dark": "#1d4ed8",
        "portfolio-blue-light": "#93c5fd",
        "portfolio-green": "#16a34a",

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
      },
    },
  },
  plugins: [],
};
