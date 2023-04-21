<template>
    <div class="w-full lg:w-2/3 sm:w-5/6 px-6 mx-auto">
        <div class="text-center">
            <p class="mb-2 text-sm font-bold text-primary">{{ intro }}</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'intro', 'message'],
}
</script>