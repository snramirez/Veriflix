import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("movies", () => {
    //Data
    const count = ref(0);

    //Methods
    const increment = () => count.value++;

    //Computed
    const double = computed(() => count.value * 2);

    return {
        count,
        increment,
        double,
    };
});