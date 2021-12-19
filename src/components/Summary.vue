<template>
  <div class="flex-1 overflow-y-auto">
    <div class="container p-2 md:p-4">
      <ul v-if="!loading">
        <li v-for="item in data?.Countries" :key="item.ID">
          {{ item.Country }}
        </li>
      </ul>
      <div v-else class="flex justify-center py-8">
        <img src="../assets/hourglass.gif" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useFetchCache} from '../hooks/useFetch'

const {data, loading} = useFetchCache(
  'summary',
  'https://api.covid19api.com/summary',
)
</script>
