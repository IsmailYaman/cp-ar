import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#D32F2F",
                    secondary: "#FFCDD2",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
