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
                glow_red: [
                    "0 0px 20px rgba(239, 68, 68, 0.35)",
                    "0 0px 65px rgba(252, 165, 165, 0.2)"
                ],
                glow_green: [
                    "0 0px 20px rgba(167, 243, 208, 0.35)",
                    "0 0px 65px rgba(52, 211, 153, 0.2)"
                ]
            }
        },
        screens:  {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '1100px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1200px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
    },
    daisyui: {
        themes: [
            {
                'arw-theme' : {
                    'primary': '#FF2955',
                    'secondary': '#FFD524',
                    'accent': '#00F6FF',
                    'neutral': '#F87DA4',
                    'base-100': '#451F4D',
                }
            }
        ]
    },
    plugins: [require("daisyui")],
}