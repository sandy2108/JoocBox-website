/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
  plugins: [],
}
