/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0D2B4E',
          950: '#091929',
        },
        brand: {
          blue: '#1E6FD9',
          navy: '#0D2B4E',
          gold: '#F5A623',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 4px 20px rgba(13,43,78,0.08)',
        'card-hover': '0 16px 45px rgba(13,43,78,0.18)',
        glow: '0 0 30px rgba(30,111,217,0.25)',
      },
    },
  },
  plugins: [],
}


