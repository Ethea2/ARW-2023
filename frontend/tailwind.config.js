/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bit': ['"Press Start 2P"', 'cursive']
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(167, 243, 208, 0.35)",
                    "0 0px 65px rgba(52, 211, 153, 0.2)"
                ]
            }
        },
    },
    plugins: [require("daisyui")],
}