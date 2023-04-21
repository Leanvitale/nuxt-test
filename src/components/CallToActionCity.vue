<template>
    <div class="flex items-center justify-center h-96 lg:mb-12 bg-scroll lg:bg-fixed custom-img">
        <div class="px-2 py-3 text-5xl text-white font-extrabold bg-opacity-50 rounded-xl text-center text-shadow">
            {{ $t('cityCTA.first') }}<br />
            {{ $t('cityCTA.second') }}
        </div>
    </div>
</template>

<style scoped>
.custom-img {
    background-image: url('../assets/img/NY-BW.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    background-position: center;
}

.text-shadow {
    text-shadow: 0px 1px 1px #000000b0;
}
</style>