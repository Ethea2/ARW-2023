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
            margin: {
                'faq-header': '120px',
            },
        },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '12px',
            'faq-ans-custom': '44px',
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