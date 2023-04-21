<template>
    <div>
        <TransitionRoot appear as="template" :show="props.showModal">
            <Dialog as="div" class="relative z-30" @close="closeModal">
                <TransitionChild
                    as="template"
                    enter="ease-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            as="template"
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md"
                            >
                                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                            <div class="mt-2 flex flex-col justify-between w-full">
                                                <a href="https://admin.investmanager.app" target="_blank" @click="closeModal">
                                                    <div
                                                        class="w-full bg-gray-50 text-lg py-3 px-6 mb-5 rounded-md ring-1 ring-gray-200 text-center font-semibold text-gray-600 hover:cursor-pointer hover:bg-gray-100"
                                                    >
                                                        {{ $t('login.manager') }}
                                                    </div>
                                                </a>
                                                <a href="https://me.investmanager.app" target="_blank" @click="closeModal">
                                                    <div
                                                        class="w-full bg-gray-50 text-lg py-3 px-6 rounded-md ring-1 ring-gray-200 text-center font-semibold text-gray-600 hover:cursor-pointer hover:bg-gray-100"
                                                    >
                                                        {{ $t('login.investor') }}
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        class="inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-200 sm:ml-3 sm:w-auto"
                                        @click="closeModal"
                                    >
                                        {{ $t('login.close') }}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
  
<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
const emit = defineEmits(['close'])

const props = defineProps({
    showModal: { type: Boolean, required: true },
})

const closeModal = () => {
    emit('close', true)
}
</script>