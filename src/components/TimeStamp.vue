<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{ props.title }}</h2>
    <div class="text-2xl mt-4 mb-10">
      {{ timestamp }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as R from 'ramda'
import {format, parseISO} from 'date-fns/fp'

interface Props {
  dataDate: string
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  dataDate: '',
  title: '',
})

const formatDateTime = format('MMMM d yyyy, h:mm:ss a')
const stringToDateTime = R.pipe(parseISO, formatDateTime)
const timestamp = stringToDateTime(props.dataDate)
</script>
