/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '768px',
                xl: '768px',
                '2xl': '768px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Roboto Slab', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
