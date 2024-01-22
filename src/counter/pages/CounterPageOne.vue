<script setup lang="ts">
import { useCounterOpsStore } from '@/store/counter-options';
import { storeToRefs } from 'pinia';
import CounterOpsValue from '@/counter/components/CounterOpsValue.vue';

const counterOpsStore      = useCounterOpsStore();
const {count, squareCount} = storeToRefs(counterOpsStore);

const { increment, incrementBy } = counterOpsStore;

</script>

<template>
    <div>
        <h1>Pinia Ops</h1>
        <h4>Hola Contador {{count}}</h4>
        <h4>Square Counter: {{squareCount}}</h4>

        <br>

        <button @click="increment">+1</button>
        <button @click="incrementBy(2)">+2</button>
        <button @click="incrementBy(5)">+5</button>
        <button @click="counterOpsStore.$reset()">reset</button>

        <br>

        <CounterOpsValue />

    </div>
</template>


<style scoped>
    button{
        margin-right: 5px;
    }
</style>