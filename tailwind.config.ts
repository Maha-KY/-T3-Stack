import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors if necessary
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
})

