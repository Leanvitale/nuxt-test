
import { FAQs } from '~~/.nuxt/components';

<template>
    <div>
        <navbar />
        <section class="pb-8 lg:pb-24 pt-[72px]">
            <banner />
            <hero />
        </section>

        <section class="py-16 lg:py-12">
            <problems />
        </section>

        <section class="py-16 lg:py-32">
            <quote />
        </section>

        <section class="py-16 lg:py-12" id="Features">
            <benefits />
        </section>

        <section class="py-16 lg:py-12">
            <call-to-action-city />
        </section>

        <section class="py-16 lg:py-12" id="Pricing">
            <pricing />
        </section>

        <section class="py-16 lg:py-28">
            <call-to-action />
        </section>

        <section class="py-16 lg:py-12">
            <FAQs />
        </section>

        <section class="py-16 lg:py-12" id="Contact">
            <contact />
        </section>

        <footer-section />
    </div>
</template>