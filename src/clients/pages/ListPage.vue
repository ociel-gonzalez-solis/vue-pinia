<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClients from '@/clients/composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue'

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();

</script>

<template>
    <div>
        <h1>Listado de Clientes</h1>
        <ClientList :clients="clients" />
        <PaginationNumbers :currentPage="currentPage" :totalPages="totalPages" @pageChanged="getPage"/>

        <LoadingModal v-if="isLoading" />
    </div>
</template>


<style scoped>

</style>