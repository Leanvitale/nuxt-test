/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/*.{js,vue,ts}',
        './src/layouts/*.vue',
        './src/pages/*.vue',
        './src/plugins/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './src/app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#14b8a6', //teal-500
                secondary: '#334155', //slate-700
                accent: '#134e4a', // teal-900
                dark: '#0f172a', // slate-900
                light: '#cbd5e1', // slate-300
                white: '#ffffff', // white
                lighter: '#f0fdfa', //teal-50
            },
        },

        screens: {
            tablets: '640px',
            // => @media (min-width: 640px) { ... }

            tabletm: '768px',
            // => @media (min-width: 768px) { ... }

            tabletl: '1024px',
            // => @media (min-width: 1024px) { ... }

            laptop: '1280px',
            // => @media (min-width: 1280px) { ... }

            desktop: '1536px',
            // => @media (min-width: 1536px) { ... }

            bigscreen: '1700px',
            // => @media (min-width: 1700px) { ... }
        },
    },
    plugins: [],
}
