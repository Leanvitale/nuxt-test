<template>
    <div class="max-md:flex-col lg:flex lg:h-[calc(100%_-_120px)]">
        <div class="w-full lg:w-1/2 flex-col px-6 py-12 lg:p-24 self-center">
            <img src="../assets/img/isologotipo.svg" alt="InvestManager Iso" class="w-28 ml-1 mb-12 max-sm:hidden" />
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ $t('hero.title') }}</h1>
            <p class="mt-6 mb-9 text-lg leading-8 text-gray-600">
                {{ $t('hero.description') }}
            </p>
            <NuxtLink
                :to="`/${$i18n.locale}/register`"
                class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
                {{ $t('hero.cta') }}
            </NuxtLink>
        </div>
        <div class="w-full lg:w-1/2">
            <img
                src="../assets/img/Hombre.jpg"
                alt=""
                class="object-cover max-lg:aspect-video lg:h-[calc(100vh_-_120px)] lg:w-auto overflow-hidden lg:ml-auto"
            />
        </div>
    </div>
</template>