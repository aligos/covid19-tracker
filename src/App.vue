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
</template>

<script lang="ts" setup>
import HeaderVue from './components/HeaderVue.vue'
import HourGlass from './components/HourGlass.vue'
import Summary from './components/Summary.vue'
</script>
