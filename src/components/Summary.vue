<template>
  <div class="flex-1 overflow-y-auto">
    <div class="container p-2 md:p-4">
      <ul>
        <li v-for="item in summary.Countries" :key="item.ID">
          {{ item.Country }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useFetch from '../hooks/useFetch'

const summary = await useFetch('https://api.covid19api.com/summary', {
  delay: 2000,
})
</script>
