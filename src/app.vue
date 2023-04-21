


<template>
    <NuxtPage />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

useHead({
    title: 'Invest Manager',
    meta: [
        {
            name: 'description',
            content: `${t('header.description')}`,
        },
        {
            name: 'keywords',
            content: `${t('header.keywords')}`,
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: 'https://firebasestorage.googleapis.com/v0/b/me-investmanager.appspot.com/o/favicon.svg?alt=media',
        },
    ],
})

useServerSeoMeta({
    title: 'Invest Manager',
    ogType: 'website',
    ogUrl: 'https://investmanager.app/',
    ogTitle: `${t('header.title')}`,
    ogDescription: `${t('header.description')}`,
    ogImage: 'https://firebasestorage.googleapis.com/v0/b/me-investmanager.appspot.com/o/logo-small.jpg?alt=media',
    ogImageType: 'image/jpeg',
    ogImageWidth: '640',
    ogImageHeight: '427',
    twitterCard: 'summary_large_image',
    twitterTitle: `${t('header.title')}`,
    twitterDescription: `${t('header.description')}`,
    twitterImage: 'https://firebasestorage.googleapis.com/v0/b/me-investmanager.appspot.com/o/logo-small.jpg?alt=media',
})
</script>