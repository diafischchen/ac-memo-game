<script>

import Villager from "./Villager.vue";
import { useStateMachine } from "../stores/state";

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
            card1: null,
            card2: null,
            trys: 0,
        };
    },
    setup() {
        const state = useStateMachine();
        return {
            state
        }
    },
    methods: {
        generateVillagers(size) {
            for (let i = 0; i < size * size; i++) {
                // generate a new random number
                let randomNumber = Math.floor(Math.random() * (size + size));
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
        },
        cardFlip(id) {
            if (id.flipped) {
                this.state.animation = false;
                return
            }

            if (this.card1 === null) {
                this.card1 = id;
            } else if (this.card2 === null) {
                this.card2 = id;
            }

            if (this.card1 !== null && this.card2 !== null) {
                setTimeout(() => {
                    this.evaluate();
                }, 300)
            } else {
                this.state.animation = false;
            }
        },
        evaluate() {
            this.trys++;
            let timeout = 10

            if (this.card1.id === this.card2.id) {
                this.card1.justGuessed()
                this.card2.justGuessed()
                
            } else {
                this.card1.justFlip()
                this.card2.justFlip()
                timeout = 1000
            }
            
            this.card1 = null;
            this.card2 = null;
            setTimeout(() => {
                this.state.animation = false;
            }, timeout)
            
        },
        reset() {
            this.villagers = [];
            this.card1 = null;
            this.card2 = null;
            this.trys = 0;
            setTimeout(() => {
                this.generateVillagers(this.size);
            }, 50)
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

<div class="scores">
    <div>Versuche: {{ trys }}</div>
    <div><button class="reset-button" @click="reset">Reset</button></div>
</div>

<div class="memo-grid" id="memo-grid">
    <Villager v-for="villager in villagers" :key="villager" :id="villager" @flipped="cardFlip" />
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

.scores {
    width: 550px;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    align-items: center;
}

.reset-button {
    background-color: #75d3ae;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-family: 'Zilla Slab', serif;
    font-weight: 700;
    font-size: 1.2rem;
    box-sizing: border-box;
    border-radius: 7px;
    cursor: pointer;
    transition: background-color .2s ease, box-shadow .2s ease;
    box-shadow: 0 5px 10px -5px #303030;
}

.reset-button:hover {
    background-color: #83e4bd;
}

.reset-button:focus {
    box-shadow: 0 5px 10px -5px #303030, 0 0 0 3px #75d3ad75;
}

</style>