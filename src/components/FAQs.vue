<template>
    <section class="relative z-20 overflow-hidden bg-white px-6">
        <div class="container mx-auto">
            <layout-intro :intro="$t('faqs.intro')" :title="$t('faqs.title')" :message="$t('faqs.message')"></layout-intro>
            <div class="flex flex-wrap max-w-5xl mx-auto mt-20">
                <div class="w-full">
                    <div
                        class="single-faq w-full border-t-2 border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8"
                        v-for="(number, index) in 14"
                        :key="index"
                    >
                        <button class="faq-btn flex w-full text-left" @click="faqSelected = index">
                            <div class="w-full">
                                <h4 class="text-base lg:text-lg font-semibold text-black">{{ $t(`faqs.list[${index}].title`) }}</h4>
                            </div>
                            <component
                                :is="faqSelected === index ? ChevronUpIcon : ChevronDownIcon"
                                class="h-6 w-6 text-primary self-center ml-4 lg:ml-10"
                                aria-hidden="true"
                            />
                        </button>
                        <div v-if="faqSelected === index" class="faq-content">
                            <p class="py-3 text-base leading-relaxed text-body-color">
                                {{ $t(`faqs.list[${index}].message`) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

const faqSelected = ref()
</script>

<style lang="scss" scoped>
</style>