// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
    srcDir: 'src',
    css: ['~/assets/css/main.css', '~/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_and_default',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'es',
                name: 'Spanish',
                file: 'es.json',
            },
        ],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
        },
    },
})
