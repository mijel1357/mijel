import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#16a34a",
                    light: "#22c55e",
                    dark: "#15803d",
                },
                secondary: {
                    DEFAULT: "#f59e0b",
                    dark: "#d97706",
                },
                accent: {
                    DEFAULT: "#0ea5e9",
                },
            },
        },
    },
    plugins: [],
};

export default config;
