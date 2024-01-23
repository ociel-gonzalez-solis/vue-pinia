import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { useClientsStore } from '@/store/clients.store';
import clientsApi from '../api/clientss-api';
import type { IClient } from '../interfaces/Client';

const getClients = async (page: number): Promise<IClient[]> => {
    await new Promise(resolve => {
        setTimeout(() => resolve(true), 2500)
    })

    const { data } = await clientsApi.get<IClient[]>(`/clients?_page=${page}`);

    return data
}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data, isError } = useQuery({
        queryKey: ['clients?_page=', currentPage],
        queryFn : () => getClients(currentPage.value),
        retry   : false,
    });

    watch(data, clients => {
        if (clients)
            store.setClients(clients);
    }, { immediate: true });

    const getPage = (page: number) => {
        store.setPage(page);
    }

    return {
        clients,
        currentPage,
        isLoading,
        totalPages,
        getPage,

        // Getter
        // totalPageNumbers: computed(
        //     ()  => [...new Array(totalPages.value)].map((v, i) => i + 1)
        // )
    }
}

export default useClients;