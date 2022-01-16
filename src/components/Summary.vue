<template>
  <div class="flex-1 overflow-y-auto">
    <div class="container p-2 md:p-4">
      <TimeStamp
        :data-date="data?.Date"
        :title="selectedCountry?.Country ?? 'Global'"
      />
      <DataBoxes :status="selectedCountry ?? data?.Global" />
      <CountrySelect
        :countries="data?.Countries"
        @get-country="getCountryData"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {useQuery} from 'vue-query'

import TimeStamp from './TimeStamp.vue'
import DataBoxes from './DataBoxes.vue'
import CountrySelect from './CountrySelect.vue'

const selectedCountry = ref<Country | null>(null)

const getSummary = async (): Promise<Summary> =>
  await fetch('https://api.covid19api.com/summary').then((response) =>
    response.json(),
  )

const {data, suspense} = useQuery('summary', getSummary)

await suspense()

const getCountryData = (country: Country) => {
  selectedCountry.value = country
}
</script>
