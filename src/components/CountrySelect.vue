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

interface Props {
  countries: Country[]
}

const props = withDefaults(defineProps<Props>(), {
  countries: () => [],
})
const emit = defineEmits(['get-country'])
const selected = ref('')

function onChange() {
  const country = props.countries.find((item) => item.ID === selected.value)
  emit('get-country', country)
}
</script>
