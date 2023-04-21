<template>
    <header class="bg-white fixed w-full top-0 z-40 drop-shadow-sm">
        <nav class="mx-auto flex max-w-[85.5rem] items-center justify-between p-6 lg:px-12" aria-label="Global">
            <div class="flex md:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <img class="h-4 w-auto" src="../assets/img/logo_h.svg" alt="" />
                </a>
            </div>
            <div class="flex md:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true"
                >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden md:flex md:gap-x-9">
                <a href="#Features" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('navbar.features') }}</a>
                <a href="#Pricing" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('navbar.pricing') }}</a>
                <a href="#Contact" class="text-sm font-semibold leading-6 text-gray-900">{{ $t('navbar.contact') }}</a>
            </PopoverGroup>
            <div class="hidden md:flex md:flex-1 md:justify-end">
                <button @click="showModal = true" class="text-sm font-semibold leading-6 text-gray-900">
                    {{ $t('navbar.sign-in') }} <span aria-hidden="true">&rarr;</span>
                </button>
            </div>
        </nav>
        <div>
            <TransitionRoot appear as="template" :show="isMobile">
                <Dialog as="div" class="md:hidden z-50" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                    <div class="fixed inset-0 z-50" />
                    <DialogPanel
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    >
                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto" src="../assets/img/isologotipo.svg" alt="" />
                            </a>
                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                                <span class="sr-only">Close menu</span>
                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <a
                                        href="#Features"
                                        @click="mobileMenuOpen = false"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >{{ $t('navbar.features') }}</a
                                    >
                                    <a
                                        href="#Pricing"
                                        @click="mobileMenuOpen = false"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >{{ $t('navbar.pricing') }}</a
                                    >
                                    <a
                                        href="#Contact"
                                        @click="mobileMenuOpen = false"
                                        class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >{{ $t('navbar.contact') }}</a
                                    >
                                </div>
                                <div class="py-6">
                                    <button
                                        @click="loginMobile"
                                        class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {{ $t('navbar.sign-in') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </TransitionRoot>
        </div>

        <modal-login :showModal="showModal" @close="showModal = false"></modal-login>
    </header>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const windowWidth = ref(0)
const showModal = ref(false)

onMounted(() => {
    window.addEventListener('resize', () => {
        if (typeof window !== 'undefined') {
            windowWidth.value = window.innerWidth
        }
    })
})
onUnmounted(() => {
    window.removeEventListener('resize', () => {
        if (typeof window !== 'undefined') {
            windowWidth.value = window.innerWidth
        }
    })
})

const loginMobile = () => {
    setTimeout(() => {
        showModal.value = true
    }, 300)
    mobileMenuOpen.value = false
}

const isMobile = computed(() => {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            typeof window !== 'undefined' ? window.navigator.userAgent : 'Mozilla/5.0',
        ) ||
        windowWidth.value < 1024
    ) {
        return true
    } else {
        return false
    }
})
</script>