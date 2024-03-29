/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // default theme colors
        lightMode: {
          colors: {
            white: '#FFFFFF',
            black: '#000000',
            green: {
              700: '#00875F',
              500: '#00B37E',
              400: '#2ECC71'
            },
            red: {
              default: '#F75A68',
              dark: '#AA2834'
            },
            blue: {
              800: '#1F2937',
              700: '#042F6C',
              600: '#009ADF',
              500: '#297DD1',
              400: '#0078BE',
              300: '#3996E0',
              200: '#BDD7F1',
              100: '#DFECF8',
              50: '#EDF6FF'
            },
            orange: '#FFA500',
            gray: {
              700: '#121214',
              600: '#202024',
              500: '#29292E',
              400: '#323238',
              300: '#7C7C8A',
              200: '#C4C4CC',
              100: '#E1E1E6',
              50: '#F6F8FB'
            }
          }
        }
      },
      backgroundImage: {
        'liner-Login':
          'linear-gradient(180deg, #CEE3F9 0%, #F5F9FC 47.92%, #CEE3F9 100%)',
        'liner-Header':
          'linear-gradient(90deg, #CEE3F9 0%, #F5F9FC 50%, #CEE3F9 100%)',
        'hero-pattern': "url('/img/hero/hero-pattern.svg')",
        'form-login-texture': "url('/img/hero/form-login-texture.svg')",
        'footer-login-bg': "url('/img/hero/footer-login-bg.svg')"
      },
      gridTemplateRows: {
        app: 'auto 1fr 2rem'
      },
      boxShadow: {
        'input-form-login':
          '0px 12px 12px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(0, 0, 0, 0.08)',
        Box_Form: '0px 0px 32px rgba(189, 215, 241, 0.25)',
        Content_Box: '0px 0px 32px rgba(31, 41, 55, 0.25)',
        Button_Form:
          '0px 16px 12px -8px rgba(0, 0, 0, 0.16), 0px 16px 8px -12px rgba(0, 0, 0, 0.12)',
        Input_Form:
          '0px 12px 12px rgba(0, 0, 0, 0.08), 0px 0px 8px rgba(0, 0, 0, 0.08)',
        Input_Form1:
          '0px 12px 12px 0px rgba(223, 236, 248, 0.25), 0px 0px 8px 0px rgba(223, 236, 248, 0.25)',
        Header: '0px 1px 6px rgba(0, 0, 0, 0.25)',
        Sidebar_bg: '60px 0px 90px rgba(0, 0, 0, 0.5)',
        Avatar_Profile: '1px 1px 4px rgba(0, 0, 0, 0.25)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        ping: 'ping 100s cubic-bezier(0, 0, 0.2, 1) infinite',
        bounce: 'bounce 25s infinite ease-in-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
