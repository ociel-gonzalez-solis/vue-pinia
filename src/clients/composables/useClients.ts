import { computed, watch } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { useClientsStore } from '@/store/clients.store';
import clientsApi from '../api/clientss-api';
import type { IClient } from '../interfaces/Client';

const getClients = async (): Promise<IClient[]> => {
    const { data } = await clientsApi.get<IClient[]>('/clients?_page=1');

    return data
}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery({
        queryKey: ['clients?_page=', 1],
        queryFn : () => getClients(),
    });


    watch(data, clients => {
        if (clients)
            store.setClients(clients);
    });


    return {
        isLoading,
        clients
    }
}

export default useClients;