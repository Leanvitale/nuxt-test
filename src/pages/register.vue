<template>
    <div class="max-md:flex-col lg:flex lg:h-screen">
        <div class="w-full lg:w-1/2">
            <img src="../assets/img/ny-city.webp" alt="" class="object-cover max-lg:aspect-video lg:h-screen lg:w-full overflow-hidden" />
        </div>
        <div class="w-full max-md:mt-8 lg:w-1/2 flex-col px-6 lg:px-12 self-center">
            <div class="w-fit mx-auto">
                <nuxt-link :to="`/${$i18n.locale}`" class="mb-6 flex items-center hover:cursor-pointer hover:underline text-gray-600">
                    <ArrowLeftIcon class="w-3 h-3 mr-1"></ArrowLeftIcon>
                    <span class="text-xs">{{ $t('register.back') }}</span>
                </nuxt-link>
                <img src="../assets/img/isologotipo.svg" alt="InvestManager Iso" class="w-20 ml-1 mb-9" />
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ $t('register.title') }}</h1>
                <p class="mt-3 mb-9 text-base leading-8 text-gray-600">{{ $t('register.description') }}</p>

                <form @submit.prevent="registerManager" class="max-w-lg">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                        <div class="w-full">
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.firstName') }}</label>
                            <div class="mt-2.5">
                                <input
                                    type="text"
                                    v-model="firstName"
                                    name="first-name"
                                    id="first-name"
                                    required="true"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.lastName') }}</label>
                            <div class="mt-2.5">
                                <input
                                    type="text"
                                    v-model="lastName"
                                    name="last-name"
                                    id="last-name"
                                    required="true"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.email') }}</label>
                            <div class="mt-2.5">
                                <input
                                    type="email"
                                    v-model="email"
                                    name="email"
                                    id="email"
                                    required="true"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="country" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.country') }}</label>
                            <div class="mt-2.5">
                                <select-country id="country" @change="setCountry"></select-country>
                            </div>
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.phone') }}</label>
                            <div class="mt-2.5">
                                <input
                                    type="text"
                                    v-model="phone"
                                    name="phone"
                                    id="phone"
                                    required="true"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.password') }}</label>
                            <div class="mt-2.5">
                                <input
                                    type="password"
                                    v-model="password"
                                    name="password"
                                    id="password"
                                    required="true"
                                    autocomplete="password"
                                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <button
                            :disabled="isValid || isSigning"
                            type="submit"
                            class="flex justify-center w-full rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <svg
                                v-if="isSigning"
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
                            <span v-if="isSigning">{{ $t('contact.signingUp') }}</span>
                            <span v-else>{{ $t('contact.signUp') }}</span>
                        </button>
                    </div>
                    <modal-alert
                        @close="showModal = false"
                        :title="$t('register.titleAlert')"
                        :message="$t('register.messageAlert')"
                        :show-modal="showModal"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref('')
const phone = ref('')
const password = ref('')
const isSigning = ref(false)
const showModal = ref(false)

const isValid = computed(() => {
    return (
        !firstName.value.length ||
        !lastName.value.length ||
        !email.value.length ||
        !country.value.length ||
        !phone.value.length ||
        password.value.length < 8
    )
})

const setCountry = (id: string) => {
    if (typeof id === 'string') {
        country.value = id
    }
}

async function registerManager() {
    try {
        isSigning.value = true
        await fetch('https://api.investmanager.app/manager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
                country: country.value,
                phone: phone.value,
            }),
        })

        email.value = ''
        password.value = ''
        firstName.value = ''
        lastName.value = ''
        country.value = ''
        phone.value = ''

        // TODO: Show alert success
        showModal.value = true
    } catch (error) {
        console.error(error)
    }

    isSigning.value = false
}
</script>