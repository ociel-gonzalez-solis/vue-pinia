import { computed, ref, watch } from 'vue'
import type { IClient } from '@/clients/interfaces/Client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import clientsApi from '../api/clientss-api';

const getClient = async (id: number) => {

    const { data } = await clientsApi.get<IClient>(`/clients/${id}`);
    return data;
}

const updateClient = async (client: IClient): Promise<IClient> => {
    // await new Promise(resolve => {
    //     setTimeout(() => resolve(true), 2500)
    // })
    // const queryClient = useQueryClient();
    const { data } = await clientsApi.patch<IClient>(`/clients/${client.id}`, client);
    // const queries = queryClient.getQueryCache().findAll({ 
    //     queryKey: ['clients?_page='],
    //     exact   : false
    // });

    // queries.forEach(query => query.fetch());

    return data;
}

const useClient = (id: number) => {
    const client = ref<IClient>();

    const { isLoading, data, isError } = useQuery({
        queryKey: ['client', id],
        queryFn: () => getClient(id),
    });

    const clientMutation = useMutation({
        mutationFn: updateClient,
    })

    watch(data, () => {
        if (data.value) {
            client.value = { ...data.value };
        }
    }, { immediate: true })


    return {
        client,
        clientMutation,
        isError,
        isErrorUpdating: computed(() => clientMutation.isError.value),
        isLoading,
        isUpdating       : computed(() => clientMutation.isPending.value),
        isUpdatingSuccess: computed(() => clientMutation.isSuccess.value),
        updateClient     : clientMutation.mutate,
    }
}

export default useClient;