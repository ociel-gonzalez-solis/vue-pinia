import { defineStore } from "pinia";
import { computed, ref } from 'vue'

export const useCounterSetUp = defineStore('counterSetUp', () => {
    const count      = ref(10);
    const lastChange = ref<Date>();

    const incrementBy = (value: number) => {
        count.value      += value;
        lastChange.value  = new Date();
    }

    const increment = () => {
        count.value++;
        lastChange.value = new Date();
    }

    return {
        count,
        lastChange,

        // getters
        squareCount: computed(() => count.value * count.value),

        // actions
        incrementBy,
        increment

    }
})