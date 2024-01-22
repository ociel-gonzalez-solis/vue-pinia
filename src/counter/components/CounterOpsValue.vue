<script setup lang="ts">
import { useCounterOpsStore } from '@/store/counter-options'
import { storeToRefs } from 'pinia'

const counterOpsStore        = useCounterOpsStore()
const { count, lastChange } = storeToRefs(counterOpsStore)
</script>

<template>
  <h1>El Valor es: {{ count }}</h1>
  <h4>EL ultimo cambio fue {{lastChange}}</h4>
</template>

<style scoped></style>
