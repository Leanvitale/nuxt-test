<template>
    <div class="container mx-auto max-md:flex-col max-md:items-center px-6 lg:flex justify-center lg:h-[calc(100%_-_120px)]">
        <div class="w-full lg:w-1/2 lg:max-w-2xl flex-col lg:p-12 self-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ $t('contact.title') }}</h2>
            <p class="mt-6 mb-9 text-base leading-8 text-gray-600">
                {{ $t('contact.message') }}
            </p>

            <dd class="flex py-2 text-base leading-8 text-gray-600">
                <component :is="EnvelopeIcon" class="h-6 w-6 text-primary self-center mr-5" aria-hidden="true" />
                hi.invest.manager@gmail.com
            </dd>
            <dd class="flex py-2 text-base leading-8 text-gray-600">
                <svg
                    class="h-6 w-6 text-primary self-center mr-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                    />
                </svg>
                <a href="https://discord.gg/4BwBumWrwf" target="_blank" class="underline">{{ $t('contact.discord') }}</a>
            </dd>
        </div>
        <div class="w-full lg:w-1/2 lg:p-12 max-md:mt-9">
            <form @submit.prevent="submitForm" class="lg:ml-auto max-w-lg">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
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
                    <div class="sm:col-span-2">
                        <label for="country" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.country') }}</label>
                        <div class="relative mt-2.5">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="country" class="sr-only">Country</label>
                            </div>
                            <input
                                type="tel"
                                v-model="country"
                                name="country"
                                id="country"
                                required="true"
                                autocomplete="tel"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">{{ $t('contact.messageTitle') }}</label>
                        <div class="mt-2.5">
                            <textarea
                                v-model="message"
                                name="message"
                                id="message"
                                rows="4"
                                required="true"
                                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm border-inputs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button
                        :disabled="isValid || isSending"
                        type="submit"
                        class="flex justify-center w-full rounded-md disabled:bg-slate-300 disabled:cursor-not-allowed bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                        <span v-if="isSending">{{ $t('contact.sending') }}</span>
                        <span v-else>{{ $t('contact.letstalk') }}</span>
                    </button>
                </div>
                <modal-alert
                    @close="showModal = false"
                    :title="$t('contact.alertTitle')"
                    :message="$t('contact.alertMessage')"
                    :show-modal="showModal"
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { ref, computed } from 'vue'

const message = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const country = ref('')
const isSending = ref(false)
const showModal = ref(false)

const isValid = computed(() => {
    return !firstName.value.length || !lastName.value.length || !email.value.length || !message.value.length || !country.value.length
})

async function submitForm() {
    try {
        isSending.value = true
        await fetch('https://api.investmanager.app/mailer/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: `${firstName.value} ${lastName.value}`,
                email: email.value,
                country: country.value,
                message: message.value,
            }),
        })

        message.value = ''
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        country.value = ''

        // TODO: Show alert success
        showModal.value = true
    } catch (error) {
        message.value = 'Error submitting form'
        console.error(error)
    }

    isSending.value = false
}
</script>