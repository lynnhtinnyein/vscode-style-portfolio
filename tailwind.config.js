/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/outlets/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "2xs": "0.6rem",
            },
            transitionProperty: {
                height: "height, max-height",
                width: "width, max-width",
                spacing: "margin, padding",
                position: "top, bottom, left, right",
                fade: "margin, opacity",
            },
            animation: {
                fadeup: "fadeup 0.5s ease-in-out",
            },
            keyframes: {
                fadeup: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(5%)",
                    },
                    "100%": { transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
