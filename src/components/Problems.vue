<template>
    <div>
        <layout-intro :intro="$t('problems.intro')" :title="$t('problems.title')" :message="$t('problems.message')"></layout-intro>

        <div class="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-6xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="CalculatorIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        {{ $t('problems.list.math.title') }}
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        {{ $t('problems.list.math.description') }}
                    </dd>
                </div>

                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="ClockIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        {{ $t('problems.list.time.title') }}
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        {{ $t('problems.list.time.description') }}
                    </dd>
                </div>

                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="ArrowTrendingDownIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        {{ $t('problems.list.focus.title') }}
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        {{ $t('problems.list.focus.description') }}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ClockIcon, CalculatorIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
</script>