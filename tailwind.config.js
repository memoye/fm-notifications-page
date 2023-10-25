/** @type {import('tailwindcss').Config} */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varName}), ${opacityValue})`
    } else return `rgb(var(${varName})`
  }
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-red': withOpacity("--primary-red"),
      'primary-blue': withOpacity("--primary-blue"),

      'white': withOpacity("--neutral"), //White
      'neutral-lightest': withOpacity("--neutral-lightest"), // Very light grayish blue
      'neutral-lighter': withOpacity("--neutral-lighter"), // Light grayish blue 1
      'neutral-light': withOpacity("--neutral-light"), // Light grayish blue 2:
      'neutral-medium': withOpacity("--neutral-medium"), //  Grayish blue:
      'neutral-dark': withOpacity("--neutral-dark"), //  Dark grayish blue:
      'neutral-darkest': withOpacity("--neutral-darkest"), // Very dark blue:
    },
    fontFamily: {
      'sans': ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui']
    },

    extend: {},
  },
  plugins: [],
}

