/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes:{
        blob:{
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',    // Extra small screens (e.g., smartphones)
        'sm': '640px',    // Small screens (e.g., tablets)
        'md': '768px',    // Medium screens (e.g., small laptops)
        'lg': '1024px',   // Large screens (e.g., laptops and desktops)
        'xl': '1280px',   // Extra large screens (e.g., large desktops)
        '2xl': '1536px',  // 2x Extra large screens (e.g., high-resolution displays)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
