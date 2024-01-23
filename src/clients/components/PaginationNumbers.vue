<script lang="ts" setup>
import useClients from '@/clients/composables/useClients'
import { ref, toRef, watch } from 'vue'

interface Props {
  totalPages : number
  currentPage: number
}

interface IEmits {
  (e: 'pageChanged', page: number) : void;
}

const props = defineProps<Props>()
const emits = defineEmits<IEmits>()

const currentPage = toRef(props, 'currentPage')
const totalPages  = toRef(props, 'totalPages')

const totalPageNumbers = ref<number[]>([])
watch(
  totalPages,
  () => {
    totalPageNumbers.value = [...new Array(totalPages.value)].map((v, i) => i + 1)
    console.log('Hecho')
  },
  {
    immediate: true
  }
)

</script>

<template>
  <div>
    <button @click="emits('pageChanged', currentPage - 1)" :disabled="currentPage === 1">Anterior</button>
    <button
      v-for="number in totalPageNumbers"
      :key="number"
      :class="{ active: currentPage === number }"
      @click="emits('pageChanged', number)"
    >
      {{ number }}
    </button>
    <button @click="emits('pageChanged', currentPage + 1)" :disabled="currentPage === totalPages">
      Siguiente
    </button>
  </div>
</template>

<style lang="css" scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.5s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all 0.5s;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
