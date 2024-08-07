/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        light: "#a0a04d", // светлый оттенок primary
        DEFAULT: "#303a30", // основной цвет primary по умолчанию
        dark: "#606000", // темный оттенок primary
      },
      secondary: {
        light: "#e6d7c6", // светлый оттенок secondary
        DEFAULT: "#b0e0b0", // основной цвет secondary по умолчанию
        dark: "#b39a82", // темный оттенок secondary
      },
      success: {
        light: "#4ade80", // светлый оттенок для успешных действий
        DEFAULT: "#10b981", // цвет для успешных действий по умолчанию
        dark: "#059669", // темный оттенок для успешных действий
      },
      warning: {
        light: "#fbbf24", // светлый оттенок для предупреждений
        DEFAULT: "#f59e0b", // цвет для предупреждений по умолчанию
        dark: "#d97706", // темный оттенок для предупреждений
      },
      danger: {
        light: "#f87171", // светлый оттенок для опасных действий
        DEFAULT: "#ef4444", // цвет для опасных действий по умолчанию
        dark: "#dc2626", // темный оттенок для опасных действий
      },
      black: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {
      textColor: {
        default: "#b0e0b0",
      },
    },
  },
  plugins: [],
};
