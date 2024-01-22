import { defineStore } from "pinia";

interface ICounterOpsState {
    count      : number;
    lastChange?: Date;
}

export const useCounterOpsStore = defineStore('counterOps', {
    state: () => ({
        count    : 0,
        lasChange: undefined
    } as ICounterOpsState),
    getters: {
        squareCount: (state) => state.count * state.count
    },
    actions: {
        incrementBy(value: number) {
            this.count      += value;
            this.lastChange  = new Date();
            console.log(this.lastChange);
        },
        increment(){
            this.count++;
            this.lastChange = new Date();
            console.log(this.lastChange);
        }
    }
});