<script setup lang="ts">
import type LoadingModal from '@/shared/components/LoadingModal.vue'
import useClient from '@/clients/composables/useClient'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const route  = useRoute()
const router = useRouter()

const { 
    isLoading,
    client,
    clientMutation,
    isError,
    updateClient,
    isUpdating,
    isErrorUpdating,
    isUpdatingSuccess
 } = useClient(+route.params.id)

watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset()
  }, 2500)
})

watch(isError, () => {
  if (isErrorUpdating) router.push('/clients')
})
</script>

<template>
  <h3 v-if="isUpdating">Guardando...</h3>
  <h3 v-if="isUpdatingSuccess">Cambios Guardados</h3>

  <LoadingModal v-if="isLoading" />

  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client)">
      <input type="text" placeholder="Nombre" v-model="client.name" />
      <input type="text" placeholder="Direccion" v-model="client.address" />
      <br />
      <button :disabled="isUpdating" type="submit">Guardar</button>
    </form>
  </div>

  <code> {{ client }} </code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}
</style>
