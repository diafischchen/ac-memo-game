<script>

import Villager from "./Villager.vue";

export default {
    name: "Game",
    components: {
        Villager
    },
    props: {
        size: {
            type: Number
        },
    },
    data() {
        return {
            villagers: [],
        };
    },
    methods: {
        generateVillagers(size) {
            for (let i = 0; i < size * size; i++) {
                // generate a new random number
                let randomNumber = Math.floor(Math.random() * 8);
                // if the random number is already two times in the array, generate a new one
                if (this.getOccurrence(this.villagers, randomNumber) > 1) {
                    i--;
                } else {
                    this.villagers.push(randomNumber);
                }
            }
        },
        getOccurrence(array, value) {
            return array.filter((v) => (v === value)).length;
        }
    },
    created() {
        // when the game object is created, it fills the villager array with random villagers
        this.villagers = [];
        this.generateVillagers(this.size);
    },
}

</script>

<template>
<div class="memo-grid" id="memo-grid">
    <Villager v-for="villager in villagers" :key="villager" :id="villager" />
</div>

</template>

<style>

.memo-grid {
    display: grid;
    grid-template-columns: repeat(4, 130px);
    grid-template-rows: repeat(4, 150px);
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    padding: 20px;
    width: min-content;
    margin: 0 auto;
}

</style>