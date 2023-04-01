<template>
  <div>{{ locale }}</div>
  <select v-model="lenguage">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === "object" ? item.name : item }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locales, locale, setLocale } = useI18n();
const lenguage = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>