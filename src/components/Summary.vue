<template>
  <div class="flex-1 overflow-y-auto">
    <div class="container p-2 md:p-4">
      <TimeStamp :data-date="summary.Date" :title="title" />
      <DataBoxes :status="status ?? summary.Global" />
      <CountrySelect
        :countries="summary.Countries"
        @get-country="getCountryData"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import TimeStamp from './TimeStamp.vue'
import DataBoxes from './DataBoxes.vue'
import CountrySelect from './CountrySelect.vue'
import useFetch from '../hooks/useFetch'

const title = ref('Global')
const status = ref({})

const summary = await useFetch('https://api.covid19api.com/summary', {
  delay: 2000,
})

status.value = summary.Global

const getCountryData = (country) => {
  status.value = country ?? summary.Global
  title.value = country?.Country ?? 'Global'
}
</script>
