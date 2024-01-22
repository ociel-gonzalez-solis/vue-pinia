<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetUp } from '@/store/counter-setup.store';
import CounterSetUpValue from '../components/CounterSetUpValue.vue';

const counterSetUpStore    = useCounterSetUp();
const {count, squareCount} = storeToRefs(counterSetUpStore);

const { increment, incrementBy } = counterSetUpStore;

</script>

<template>
    <div>
        <h1>Pinia SetUp</h1>
        <h4>Hola Contador {{count}}</h4>
        <h4>Square Counter: {{squareCount}}</h4>

        <br>

        <button @click="increment">+1</button>
        <button @click="incrementBy(2)">+2</button>
        <button @click="incrementBy(5)">+5</button>
        <button @click="counterSetUpStore.$reset()">reset</button>

        <br>

        <CounterSetUpValue />

    </div>
</template>


<style scoped>
    button{
        margin-right: 5px;
    }
</style>