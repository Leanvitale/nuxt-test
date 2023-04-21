<template>
    <!-- ====== Footer Section Start -->
    <footer class="relative z-10 bg-white p-6 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto px-6">
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4 sm:w-full lg:w-4/12 order-3 lg:order-1 max-md:mt-9">
                    <div class="mb-10 w-fit text-center lg:text-left max-md:mx-auto">
                        <img src="../assets/img/logo.svg" alt="logo" class="mb-6 max-w-[200px]" />
                        <p class="text-body-color text-sm mb-4">&copy; 2024 InvestManager</p>
                        <nuxt-link to="/es" @click="$i18n.setLocale('es')" class="hover:underline">ES</nuxt-link> |
                        <nuxt-link to="/en" @click="$i18n.setLocale('en')" class="hover:underline">EN</nuxt-link>
                    </div>
                </div>

                <div class="w-full order-1 lg:order-2 px-4 sm:w-1/2 lg:w-3/12">
                    <div class="mb-10 w-full">
                        <h4 class="text-dark mb-5 lg:mb-9 text-xl font-semibold">Resources</h4>
                        <ul>
                            <li>
                                <a
                                    href="https://admin.investmanager.app"
                                    target="_blank"
                                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                                >
                                    {{ $t('footer.links.manager') }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://me.investmanager.app"
                                    target="_blank"
                                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                                >
                                    {{ $t('footer.links.investor') }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wiki.investmanager.app"
                                    target="_blank"
                                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                                >
                                    {{ $t('footer.links.wiki') }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://status.investmanager.app"
                                    target="_blank"
                                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                                >
                                    {{ $t('footer.links.status') }}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/4BwBumWrwf"
                                    target="_blank"
                                    class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                                >
                                    {{ $t('footer.links.discord') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="w-full order-2 lg:order-3 px-4 sm:w-1/2 lg:w-5/12">
                    <form @submit.prevent="subscribeNewslatter" class="lg:ml-auto max-w-lg">
                        <div class="mb-10 w-full">
                            <h4 class="text-dark mb-9 text-2xl font-semibold">{{ $t('footer.newslatter') }}</h4>
                            <p class="mt-6 mb-4 text-base leading-8 text-gray-600">{{ $t('footer.newslatterMessage') }}</p>
                            <div class="flex">
                                <input
                                    type="email"
                                    name="email-newslatter"
                                    id="email-newslatter"
                                    required="true"
                                    v-model="email"
                                    :placeholder="String($t('footer.emial'))"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                                <button
                                    :disabled="isValid || isSending"
                                    type="submit"
                                    class="flex justify-center ml-2 rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <svg
                                        v-if="isSending"
                                        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path
                                            class="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <span v-if="isSending">{{ $t('footer.subscribing') }}</span>
                                    <span v-else>{{ $t('footer.subscribe') }}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <modal-alert @close="showModal = false" :title="$t('footer.alertTitle')" :message="$t('footer.alertMessage')" :show-modal="showModal" />
    </footer>
    <!-- ====== Footer Section End -->
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'

const email = ref('')
const isSending = ref(false)
const showModal = ref(false)

const isValid = computed(() => {
    return !email.value.length
})

async function subscribeNewslatter() {
    try {
        isSending.value = true
        await fetch('https://api.investmanager.app/newslatter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
            }),
        })

        email.value = ''

        showModal.value = true
    } catch (error) {
        console.error(error)
    }

    isSending.value = false
}
</script>