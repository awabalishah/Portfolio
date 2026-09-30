/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Soft, warm palette used across the VSL homepage.
            colors: {
                cream: '#F5F1EA',   // page background
                sand: '#ECE5D9',    // alternate section background
                paper: '#FCFAF6',   // cards
                line: '#E2D9CB',    // borders
                ink: '#211E1A',     // headings
                body: '#57524A',    // paragraph text
                mute: '#8A8378',    // captions
                sage: {
                    50: '#F0F4F0',
                    100: '#E1EAE3',
                    200: '#C8D8CD',
                    400: '#8EAA98',
                    600: '#557A66',
                    700: '#43634F',
                    800: '#34503F',
                },
                blush: '#EBD9CC',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['Newsreader', 'Georgia', 'serif'],
            },
            boxShadow: {
                soft: '0 1px 2px rgba(33,30,26,0.04), 0 8px 24px -8px rgba(33,30,26,0.08)',
                lift: '0 2px 4px rgba(33,30,26,0.04), 0 24px 48px -16px rgba(33,30,26,0.14)',
            },
        },
    },
    plugins: [],
}
