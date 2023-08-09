import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            padding: {
                default: "1rem"
            }
        },
        fontFamily: {
            'mono': ['ui-monospace', 'SFMono-Regular'],
        },
        extend: {},
    },
    plugins: [
        plugin(function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl') },
                'h2': { fontSize: theme('fontSize.xl') },
                'h3': { fontSize: theme('fontSize.lg') },
            })
        })
    ],
}

