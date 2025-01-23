/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            colors: {
                primary: {
                    light: "#ffffff",
                    dark: "#0a0a0a",
                },
                secondary: {
                    light: "#f3f4f6",
                    dark: "#1f2937",
                },
                accent: "#3b82f6", // blue-600
                "accent-light": "#60a5fa",
                "accent-dark": "#2563eb",
            },
            animation: {
                gradient: "gradient 8s linear infinite",
            },
            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    plugins: [],
};
