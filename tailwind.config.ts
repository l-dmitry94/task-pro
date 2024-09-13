import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                black: {
                    '161616': '#161616',
                    '151515': '#151515',
                    '1f1f1f': '#1f1f1f',
                    '121212': '#121212',
                },
                green: {
                    DEFAULT: '#bedbb0',
                    dark: '#9dc888',
                },
                gray: '#bedbb0',
            },
            letterSpacing: {
                tight: '-0.02em',
            },
            lineHeight: {
                tight: '1.29',
            },
            screens: {
                mobile: '375px',
                tablet: '768px',
                desktop: '1440px',
            },
            backgroundImage: {
                'gradient-linear':
                    'linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #bedbb0 92.19%)',
            },
        },
    },
    plugins: [],
};
export default config;
