<script lang="ts" setup>
import type { IClient } from '../interfaces/Client';

interface Props {
  clients: IClient[];
}

const {clients} = defineProps<Props>()

</script>

<template>
  <ul>
    <li
        v-for="client of clients" :key="client.id">
      <routerLink
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
