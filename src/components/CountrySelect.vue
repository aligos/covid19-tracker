<template>
  <select
    v-model="selected"
    class="form-select mt-10 block w-full border p-3 rounded"
    @change="onChange()"
  >
    <option value="">Select Country</option>
    <option
      v-for="country in props.countries"
      :key="country.ID"
      :value="country.ID"
    >
      {{ country.Country }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import * as R from 'ramda'

interface Props {
  countries: Country[]
}

const selected = ref('')

const props = withDefaults(defineProps<Props>(), {
  countries: () => [],
})

const emit = defineEmits(['get-country'])

function onChange() {
  const country = R.find(R.propEq('ID', selected.value), props.countries)
  emit('get-country', country)
}
</script>
