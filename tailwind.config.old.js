/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  prefix: 'tw-',
  theme: {
    fontSize: {
      xs: ['0.625rem'] /* 10px */,
      sm: ['0.75rem'] /* 12px */,
      base: ['0.875rem'] /* 14px */,
      lg: ['1rem'] /* 16px */,
      xl: ['1.125rem'] /* 18px */,
      '2xl': ['1.25rem'] /* 20px */,
      '3xl': ['1.5rem'] /* 24px */,
      '4xl': ['2rem'] /* 32px */,
      '5xl': ['2.625rem'] /* 42px */,
      '6xl': ['3rem'] /* 48px */,
      '7xl': ['3.75rem'] /* 60px */,
      '8xl': ['4.5rem'] /* 72px */,
      '9xl': ['6rem'] /* 96px */,
    },

    extend: {
      fontFamily: {
        sans: ['Dana', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Background
        background: 'var(--background)',
        'background-hover': 'var(--background-hover)',
        'background-active': 'var(--background-active)',
        'background-selected': 'var(--background-selected)',
        'background-selected-hover': 'var(--background-selected-hover)',
        'background-inverse': 'var(--background-inverse)',
        'background-inverse-hover': 'var(--background-inverse-hover)',
        'background-brand': 'var(--background-brand)',

        // Surface
        'surface-primary': 'var(--surface-primary)',
        'surface-primary-hover': 'var(--surface-primary-hover)',
        'surface-primary-active': 'var(--surface-primary-active)',
        'surface-primary-selected': 'var(--surface-primary-selected)',
        'surface-primary-selected-hover': 'var(--surface-primary-selected-hover)',
        'surface-secondary': 'var(--surface-secondary)',
        'surface-secondary-hover': 'var(--surface-secondary-hover)',
        'surface-secondary-active': 'var(--surface-secondary-active)',
        'surface-secondary-selected': 'var(--surface-secondary-selected)',
        'surface-secondary-selected-hover': 'var(--surface-secondary-selected-hover)',
        'surface-selected-inverse': 'var(--surface-selected-inverse)',
        'surface-selected-disabled': 'var(--surface-selected-disabled)',
        'surface-accent-primary': 'var(--surface-accent-primary)',
        'surface-accent-secondary': 'var(--surface-accent-secondary)',
        'surface-accent-tertiary': 'var(--surface-accent-tertiary)',

        // Field
        field: 'var(--field)',
        'field-hover': 'var(--field-hover)',

        // Border
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'border-tile': 'var(--border-tile)',
        'border-inverse': 'var(--border-inverse)',
        'border-disabled': 'var(--border-disabled)',
        'border-interactive': 'var(--border-interactive)',

        // Foreground
        'fg-primary': 'var(--fg-primary)',
        'fg-secondary': 'var(--fg-secondary)',
        'fg-placeholder': 'var(--fg-placeholder)',
        'fg-on-color': 'var(--fg-on-color)',
        'fg-on-color-disabled': 'var(--fg-on-color-disabled)',
        'fg-helper': 'var(--fg-helper)',
        'fg-error': 'var(--fg-error)',
        'fg-inverse': 'var(--fg-inverse)',
        'fg-disabled': 'var(--fg-disabled)',

        // Link
        'link-primary': 'var(--link-primary)',
        'link-primary-hover': 'var(--link-primary-hover)',
        'link-secondary': 'var(--link-secondary)',
        'link-secondary-hover': 'var(--link-secondary-hover)',
        'link-inverse': 'var(--link-inverse)',
        'link-inverse-hover': 'var(--link-inverse-hover)',
        'link-visited': 'var(--link-visited)',

        // Support
        'support-error': 'var(--support-error)',
        'support-success': 'var(--support-success)',
        'support-warning': 'var(--support-warning)',
        'support-info': 'var(--support-info)',
        'support-error-inverse': 'var(--support-error-inverse)',
        'support-success-inverse': 'var(--support-success-inverse)',
        'support-warning-inverse': 'var(--support-warning-inverse)',
        'support-info-inverse': 'var(--support-info-inverse)',

        // Miscellaneous
        focus: 'var(--focus)',
        'support-caution-undefined': 'var(--support-caution-undefined)',
        'focus-inset': 'var(--focus-inset)',
        'focus-inverse': 'var(--focus-inverse)',
        interactive: 'var(--interactive)',
        highlight: 'var(--highlight)',
        overlay: 'var(--overlay)',
        'skeleton-element': 'var(--skeleton-element)',
        'skeleton-background': 'var(--skeleton-background)',
      },
    },
    plugins: [],
  },
};
