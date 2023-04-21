<template>
    <div class="bg-dark py-8 px-4 md:px-12 flex-wrap md:flex h-fit md:justify-around">
        <img
            src="./../assets/img/benjamin.webp"
            alt="Benjamin Franklin"
            class="w-auto max-w-xs md:max-w-sm h-fit -my-12 max-md:mx-auto self-center xl:ml-24"
        />
        <div class="w-fit mt-20 md:mt-0 text-center max-md:mx-auto md:text-left self-center xl:mr-36">
            <h3 class="text-white text-4xl md:text-4xl lg:text-6xl mb-6 md:mb-9">{{ $t('benjamin.title') }}</h3>
            <p class="text-sm font-bold text-white mb-1">Benjamin Franklin</p>
            <p class="text-xs text-light font-light">{{ $t('benjamin.description') }}</p>
        </div>
    </div>
</template>