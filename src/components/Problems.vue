<template>
    <div>
        <layout-intro :intro="$t('problems.intro')" :title="$t('problems.title')" :message="$t('problems.message')"></layout-intro>

        <div class="mx-auto mt-12 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-6xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="CalculatorIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        Doing the math
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        For precise investor stake calculations, avoid rounding errors to prevent long-term negative consequences and losses for the
                        fund.
                    </dd>
                </div>

                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="ClockIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        Support time
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        Investors will want to know how their investments are evolving, which will often require valuable time from the fund manager
                        to verify basic data.
                    </dd>
                </div>

                <div class="relative px-8">
                    <dt class="text-lg font-semibold leading-7 text-gray-900 flex">
                        <component :is="ArrowTrendingDownIcon" class="h-6 w-6 text-primary self-center mr-2" aria-hidden="true" />
                        Focus
                    </dt>
                    <dd class="mt-3 text-base leading-7 text-gray-600">
                        Maintaining focus is crucial when managing a fund. Administering the fund can be stressful and complicated, diverting effort
                        from financial operations.
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ClockIcon, CalculatorIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
</script>