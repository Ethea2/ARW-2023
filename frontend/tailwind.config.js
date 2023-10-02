/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'bit': ['"Press Start 2P"', 'cursive'],
                'monda':['"Monda"', '"sans-serif"'],
                'header': ['"Bungee"', 'cursive']
            },
            dropShadow: {
                glow_red: [
                    "0 0px 20px rgba(239, 68, 68, 0.35)",
                    "0 0px 65px rgba(252, 165, 165, 0.2)"
                ],
                glow_green: [
                    "0 0px 20px rgba(167, 243, 208, 0.35)",
                    "0 0px 65px rgba(52, 211, 153, 0.2)"
                ]
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    daisyui: {
        themes: [
            {
                'arw-theme': {
                    'primary': '#FF2955',
                    'secondary': '#FFD524',
                    'accent': '#00F6FF',
                    'neutral': '#F87DA4',
                    'base-100': '#451F4D',
                }
            }
        ],
        base: false
    },
    plugins: [require("daisyui")],
}