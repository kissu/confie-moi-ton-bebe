import type { Config } from 'tailwindcss';
import { setupInspiraUI } from '@inspira-ui/plugins';
import animate from 'tailwindcss-animate';

export default {
  darkMode: 'selector',
  safelist: ['dark'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo'],
        apple: ['Homemade Apple'],
        scary: ['Nanum Brush Script'],
        painter: ['Painter'],
      },
      animation: {
        'skew-scroll': 'skew-scroll 15s linear infinite',
        'fade-in': 'fade-in 1s forwards',
      },
      transitionDelay: {
        2000: '2000ms',
        4000: '4000ms',
        10000: '10000ms',
      },
      keyframes: {
        'skew-scroll': {
          '0%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(40%)',
          },
          '100%': {
            transform:
              'rotatex(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-50%)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        redish: '#FF006A',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },

  plugins: [animate, setupInspiraUI],
} satisfies Config;
