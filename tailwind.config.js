/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#00DCFF", // Bright Cyan - Futuristic Primary
        secondary: "#FF00C1", // Vivid Magenta - Futuristic Accent
        neutral: "#A0AEC0", // Cool Gray - Neutral Tones
        lightbg: "#1A202C", // Dark Slate - Futuristic Background
        darktext: "#E2E8F0", // Light Gray - Futuristic Text on Dark BG
        hovertxt: "#00DCFF", // Bright Cyan for hover states on text
        cardbg: "#2D3748", // Darker Gray for cards
      },
      fontFamily: {
        sans: ["Orbitron", "sans-serif"], // Futuristic, geometric sans-serif
        mono: ["Share Tech Mono", "monospace"], // Monospaced for a techy feel
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-section': 'fadeIn 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #00DCFF, 0 0 10px #00DCFF' },
          '50%': { boxShadow: '0 0 20px #00DCFF, 0 0 30px #00DCFF' },
        }
      }
    },
  },
  plugins: [],
}
