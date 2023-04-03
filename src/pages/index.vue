<template>
    <div>
        <section class="py-32">
            <layout-intro />
        </section>

        <section class="py-32">
            <quote />
        </section>

        <section class="py-32">
            <benefits />
        </section>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'
const { locale } = useI18n()

const includedFeatures = ['Private forum access', 'Member resources', 'Entry to annual conference', 'Official member t-shirt']
</script>
