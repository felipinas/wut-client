import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)'
      },
      colors: {
        'button-blue': '#2A5DE0',
        'input-border': '#343434',
        'white-half': '#ffffff80',
        'header-border': '#171717'
      }
    }
  },
  plugins: []
};
export default config;
