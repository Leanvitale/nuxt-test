<template>
    <div class="bg-dark py-14 tablets:py-8 tabletl:py-14 desktop:py-24 px-6 flex flex-col tablets:flex-row items-center relative">
        <img
            src="./../assets/img/benjamin.png"
            alt="Benjamin Franklin"
            class="w-full tablets:w-2/5 mr-10 ml-8 tablets:absolute aspect-video order-2 tablets:order-1 media"
        />
        <div class="w-full tablets:w-3/6 mb-8 tablets:mb-0 tablets:ml-auto tablets:mr-0 order-1 tablets:order-2">
            <h3 class="text-white text-5xl italic mb-9">"Time is money"</h3>
            <p class="text-sm font-bold text-white mb-1">Benjamin Franklin</p>
            <p class="text-xs text-light font-light">Founder of the United States</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.media {
    @media all and (min-width: 640px) {
        height: 120%;
    }

    @media all and (min-width: 1280) {
        height: auto;
    }
}
</style>
