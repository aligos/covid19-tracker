<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!-- Box 1 -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ numberWithCommas(props.status.NewConfirmed) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ numberWithCommas(props.status.TotalConfirmed) }}
      </div>
    </div>

    <!-- Box 2 -->
    <div class="shadow-md bg-blue-200 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New:</span>
        {{ numberWithCommas(props.status.NewDeaths) }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:</span>
        {{ numberWithCommas(props.status.TotalDeaths) }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  status: {
    TotalDeaths: number
    NewDeaths: number
    TotalConfirmed: number
    NewConfirmed: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  status: () => ({
    TotalDeaths: 0,
    NewDeaths: 0,
    TotalConfirmed: 0,
    NewConfirmed: 0,
  }),
})

const numberWithCommas = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
</script>
