/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FEF08A',
      },
      fontFamily: {
        'onest': ['Onest Variable', 'sans-serif'],
        'twinkle': ['Twinkle Star', 'cursive'],
      },
    },
  },
  plugins: [],
}
