<template>
  <div class="flex flex-col h-screen">
    <HeaderVue />
    <Suspense>
      <Summary />
      <template #fallback>
        <HourGlass />
      </template>
    </Suspense>
  </div>
  <VueQueryDevTools :initial-is-open="true" />
</template>

<script lang="ts" setup>
import {useQueryProvider} from 'vue-query'
import {VueQueryDevTools} from 'vue-query/devtools'

import HeaderVue from './components/HeaderVue.vue'
import HourGlass from './components/HourGlass.vue'
import Summary from './components/Summary.vue'

// setup vue query provider
useQueryProvider()
</script>
