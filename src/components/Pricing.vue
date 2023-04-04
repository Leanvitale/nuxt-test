<template>
    <layout-intro :intro="$t('pricing.intro')" :title="$t('pricing.title')" :message="$t('pricing.message')"></layout-intro>

    <div class="mx-auto max-w-2xl lg:max-w-6xl px-6 mt-20">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div class="flex-col mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-nones p-12">
                <dt class="text-xl font-semibold leading-7 text-gray-900 flex">Classic</dt>
                <dd class="my-6 text-sm leading-7 text-gray-500">{{ $t('pricing.plans.classic.message') }}</dd>
                <dd class="text-4xl font-bold leading-7 text-gray-900">
                    ${{ classicPrice }} <span class="text-base">/{{ $t('pricing.month') }}</span>
                </dd>
                <dd class="py-6">
                    <button
                        class="hover:bg-primary hover:text-white text-primary ring-1 ring-primary rounded-md px-5 py-2 w-full ease-in-out duration-300"
                    >
                        {{ $t('pricing.cta') }}
                    </button>
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.a', { MAX_FUNDS: '1' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.b', { MAX_INVESTORS: '50' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.c') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.d') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.e') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.f') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.g') }}
                </dd>
            </div>

            <div class="flex-col mx-auto max-w-2xl rounded-3xl ring-2 ring-primary lg:mx-0 lg:flex lg:max-w-nones p-12">
                <dt class="text-xl leading-7 text-primary font-bold flex">
                    Deluxe
                    <span class="ml-auto rounded-full bg-amber-50 text-primary text-sm px-3 py-1 self-center font-semibold">{{
                        $t('pricing.most_popular')
                    }}</span>
                </dt>
                <dd class="my-6 text-sm leading-7 text-gray-500">{{ $t('pricing.plans.deluxe.message') }}</dd>
                <dd class="text-4xl font-bold leading-7 text-gray-900">
                    ${{ deluxePrice }} <span class="text-base">/{{ $t('pricing.month') }}</span>
                </dd>
                <dd class="py-6">
                    <button class="bg-primary hover:bg-amber-400 rounded-md px-5 py-2 text-white w-full ease-in-out duration-300">
                        {{ $t('pricing.cta') }}
                    </button>
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.a', { MAX_FUNDS: '2' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.b', { MAX_INVESTORS: '100' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.c') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.d') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.e') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.f') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.a') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.b') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.c') }}
                </dd>
            </div>

            <div class="flex-col mx-auto max-w-2xl rounded-3xl ring-1 ring-amber-200 lg:mx-0 lg:flex lg:max-w-nones p-12">
                <dt class="text-xl font-semibold leading-7 text-gray-900 flex">Elite</dt>
                <dd class="my-6 text-sm leading-7 text-gray-500">{{ $t('pricing.plans.elite.message') }}</dd>
                <dd class="text-4xl font-bold leading-7 text-gray-900">
                    ${{ elitePrice }} <span class="text-base">/{{ $t('pricing.month') }}</span>
                </dd>
                <dd class="py-6">
                    <button
                        class="hover:bg-primary hover:text-white text-primary ring-1 ring-primary rounded-md px-5 py-2 w-full ease-in-out duration-300"
                    >
                        {{ $t('pricing.cta') }}
                    </button>
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.a', { MAX_FUNDS: '3' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features.b', { MAX_INVESTORS: '200' }) }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.c') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.d') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.e') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" /> {{ $t('pricing.features.f') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.a') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.b') }}
                </dd>
                <dd class="flex text-gray-500 py-2 text-sm">
                    <component :is="CheckBadgeIcon" class="h-5 w-5 text-primary self-center mr-2" aria-hidden="true" />
                    {{ $t('pricing.features_plus.c') }}
                </dd>
            </div>
        </dl>
    </div>
</template>


<script setup lang="ts">
import { reactive, computed } from 'vue'
import { CheckIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'
const recurring = 'month'
const classic = {
    month: '49',
    year: '490',
}
const deluxe = {
    month: '99',
    year: '990',
}
const elite = {
    month: '149',
    year: '1490',
}

const classicPrice = computed(() => {
    return classic[recurring]
})

const deluxePrice = computed(() => {
    return deluxe[recurring]
})

const elitePrice = computed(() => {
    return elite[recurring]
})
</script>