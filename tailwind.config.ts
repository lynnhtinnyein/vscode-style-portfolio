import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // light theme
                "light-header": colors.gray[200],
                "light-explorer": colors.gray[50],
                "light-explorer-icon-active": colors.sky[500],
                "light-explorer-section-header": colors.white,
                "light-activitybar": colors.white,
                "light-tab": colors.gray[100],
                "light-tab-active": colors.white,
                "light-content": colors.gray[50],
                "light-footer": colors.gray[200],
                "light-background": colors.gray[50],
                "light-text": colors.gray[800],
                "light-text-active": colors.black,
                "light-text-dim": colors.gray[400],
                "light-pagetitle": colors.gray[800],
                "light-bg-highlight": colors.gray[200],
                "light-resizer": colors.gray[100],
                "light-resizer-active": colors.gray[300],
                "light-line": colors.gray[200],
                "light-bubble-text": colors.gray[900],
                "light-card": colors.white,
                "light-input": colors.gray[100],
                "light-section-title": colors.cyan[400],

                // dark theme
                "dark-header": colors.zinc[900],
                "dark-explorer": colors.zinc[900],
                "dark-explorer-icon-active": colors.orange[500],
                "dark-explorer-section-header": colors.zinc[800],
                "dark-activitybar": colors.zinc[800],
                "dark-tab": colors.zinc[700],
                "dark-tab-active": colors.zinc[800],
                "dark-content": colors.zinc[800],
                "dark-footer": colors.zinc[600],
                "dark-background": colors.zinc[900],
                "dark-text": colors.zinc[300],
                "dark-text-active": colors.white,
                "dark-text-dim": colors.zinc[500],
                "dark-pagetitle": colors.yellow[200],
                "dark-bg-highlight": colors.zinc[700],
                "dark-resizer": colors.zinc[900],
                "dark-resizer-active": colors.gray[500],
                "dark-line": colors.zinc[700],
                "dark-bubble-text": colors.cyan[300],
                "dark-card": colors.zinc[700],
                "dark-input": colors.zinc[800],
                "dark-section-title": colors.cyan[300],
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-roboto-mono)", "monospace"],
            },
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
                fadeup: "fadeup 0.5s ease-in-out forwards",
                "pulse-fast": "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeup: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(5%)",
                    },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                }
            },
        },
    },
    plugins: [
        ({ addUtilities }) => {
            const newUtilities = {
                ".mask-gradient": {
                    WebkitMask: "linear-gradient(90deg, #0000, #000 5% 90%, #0000)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
} satisfies Config;
