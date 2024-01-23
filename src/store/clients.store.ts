import type { IClient } from '@/clients/interfaces/Client';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(1);
    const totalPages  = ref<number>(5);
    const clients     = ref<IClient[]>([]);

    return {
        // State
        currentPage,
        totalPages,
        clients,

        // Getters
        // squareCount: computed( () => count.value * count.value ),

        // Actions
        setClients(newClients: IClient[]) {
            clients.value = newClients;
        },
        setPage(page: number) {
            if (currentPage.value === page) return;
            if (page <= 0) return;
            if (page > totalPages.value) return;

            currentPage.value = page;
        }

    }
});
