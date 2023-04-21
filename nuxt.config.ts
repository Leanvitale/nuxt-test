// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/gtm'],
    gtm: {
        id: 'GTM-PMH9Q5H',
        enabled: true,
    },
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
        strategy: 'prefix',
        locales: [
            {
                code: 'es',
                name: 'Spanish',
                file: 'es.json',
            },
            {
                code: 'en',
                name: 'English',
                file: 'en.json',
            },
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            onlyOnRoot: true, // solo en la página principal
        },
        vueI18nLoader: true,
        noPrefixDefaultLocale: true,
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: require('./src/locales/en.json'),
                es: require('./src/locales/es.json'),
            },
        },
    },
})
