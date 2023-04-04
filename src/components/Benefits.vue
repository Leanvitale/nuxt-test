<template>
    <div class="flex flex-col">
        <layout-intro :intro="$t('solution.slogan')" :title="$t('solution.title')" :message="$t('solution.message')" />

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl px-6">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="BoltIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.a.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.a.description') }}
                    </dd>
                </div>

                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="UsersIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.b.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.b.description') }}
                    </dd>
                </div>

                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="ComputerDesktopIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.c.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.c.description') }}
                    </dd>
                </div>

                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="BanknotesIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.d.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.d.description') }}
                    </dd>
                </div>

                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="RectangleStackIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.e.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.e.description') }}
                    </dd>
                </div>

                <div class="relative pl-16">
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                        <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <component :is="LockClosedIcon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {{ $t('feature.f.title') }}
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                        {{ $t('feature.f.description') }}
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup>
import { BoltIcon, UsersIcon, ComputerDesktopIcon, BanknotesIcon, RectangleStackIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
</script>