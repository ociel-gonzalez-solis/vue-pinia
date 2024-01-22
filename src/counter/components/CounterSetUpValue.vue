<script setup lang="ts">
import { useCounterSetUp } from '@/store/counter-setup.store';
import { storeToRefs } from 'pinia'

const counterSetUpStore     = useCounterSetUp();
const { count, lastChange } = storeToRefs(counterSetUpStore)
</script>

<template>
  <h1>El Valor es: {{ count }}</h1>
  <h4>EL ultimo cambio fue {{lastChange}}</h4>
</template>

<style scoped></style>
