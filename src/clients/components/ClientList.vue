<script lang="ts" setup>
import useClients from '../composables/useClients';


const { isLoading, clients } = useClients();

console.log(clients.value);

</script>

<template>
  <ul>
    <li>
      <routerLink
        v-for="client of clients" :key="client.id"
        :to="{
          name  : 'client-id',
          params: { id: client.id }
        }"
      >
        {{client.name}}
      </routerLink>
    </li>
  </ul>
</template>

<style scoped></style>
