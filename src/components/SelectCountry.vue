<template>
    <div>
        <Combobox v-model="selected">
            <div class="relative mt-1">
                <div
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                >
                    <ComboboxInput
                        class="w-full border-none py-0 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        :displayValue="(country) => country?.name"
                        @change="query = $event.target.value"
                    />
                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </ComboboxButton>
                </div>
                <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
                    <ComboboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                        <div
                            v-if="filteredCountries.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-4 text-gray-700"
                        >
                            Nothing found.
                        </div>

                        <ComboboxOption
                            v-for="person in filteredCountries"
                            as="template"
                            :key="person.id"
                            :value="person"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                :class="{
                                    'bg-teal-600 text-white': active,
                                    'text-gray-900': !active,
                                }"
                            >
                                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                    {{ person.name }}
                                </span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{ 'text-white': active, 'text-teal-600': !active }"
                                >
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>
  
<script lang="ts">
import { ref, computed, watch } from 'vue'
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { listOfCountries } from '@/assets/ts/countries'

export default {
    components: {
        Combobox,
        ComboboxInput,
        ComboboxButton,
        ComboboxOptions,
        ComboboxOption,
        TransitionRoot,
        CheckIcon,
        ChevronUpDownIcon,
    },
    setup(_, context) {
        let selected = ref(listOfCountries[6])
        let query = ref('')

        interface iCountry {
            name: string
            id: string
        }

        let filteredCountries = computed(() =>
            query.value === ''
                ? (listOfCountries as iCountry[])
                : (listOfCountries.filter((country) =>
                      country.name.toLowerCase().replace(/\s+/g, '').includes(query.value.toLowerCase().replace(/\s+/g, '')),
                  ) as iCountry[]),
        )

        watch(selected, (newValue, oldValue) => {
            changeData(newValue.id)
        })

        const changeData = (id: string) => {
            context.emit('change', id)
        }

        changeData('AR')

        return {
            selected,
            query,
            filteredCountries,
            changeData,
        }
    },
}
</script>