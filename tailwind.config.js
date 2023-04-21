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
                primary: '#f2a902', //teal-500
                secondary: '#334155', //slate-700
                accent: '#134e4a', // teal-900
                dark: '#061817', // slate-900
                light: '#cbd5e1', // slate-300
                white: '#ffffff', // white
                lighter: '#f0fdfa', //teal-50
            },
        },
    },
    experimental: {
        optimizeUniversalDefaults: true,
    },
    plugins: [],
}
