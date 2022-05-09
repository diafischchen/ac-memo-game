<script>

import { useStateMachine } from "../stores/state";

export default {
    name: 'Villager',
    props: ['id'],
    setup() {
        const state = useStateMachine();
        return {
            state
        }
    },
    data() {
        return {
            sprites: [
                new URL('../assets/villagers/eufemia_nh.png', import.meta.url),
                new URL('../assets/villagers/huschke_nh.png', import.meta.url),
                new URL('../assets/villagers/melinda_nh.png', import.meta.url),
                new URL('../assets/villagers/mimmi_nh.png', import.meta.url),
                new URL('../assets/villagers/pullunda_nh.png', import.meta.url),
                new URL('../assets/villagers/sophie_nh.png', import.meta.url),
                new URL('../assets/villagers/trita_nh.png', import.meta.url),
                new URL('../assets/villagers/vega_nh.png', import.meta.url),
            ],
            flipped: true,
            cardCollapse: false,
            guessed: false,
        }
    },
    methods: {
        flip() {
            if (!this.state.animation && this.flipped && !this.guessed) {
                this.state.animation = true;

                this.cardCollapse = !this.cardCollapse;

                setTimeout(() => {
                    this.flipped = !this.flipped;
                    setTimeout(() => {
                        this.cardCollapse = !this.cardCollapse;
                        setTimeout(() => {
                            this.$emit('flipped', this);
                        }, 200);
                    }, 30)
                }, 200)
            }
        },
        justFlip() {
            this.cardCollapse = !this.cardCollapse;

            setTimeout(() => {
                this.flipped = !this.flipped;
                setTimeout(() => {
                    this.cardCollapse = !this.cardCollapse;
                }, 30)
            }, 200)
        },
        justGuessed() {
            this.guessed = true;
        }
    }
}

</script>

<template>
<div class="card" @click="flip()" :class="{'guessed' : guessed}">
    <div class="card-surface card-back" v-if="flipped" :class="{'collapsed' : cardCollapse}">
        ?
    </div>
    <div class="card-surface card-front" v-else :class="{'collapsed' : cardCollapse}">
        <img :src="sprites[id]" />
    </div>
</div>

</template>

<style>

.card {
    width: 130px;
    height: 150px;
    font-size: 5rem;
    color: #0c1424;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
}

.card-surface {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: transform .2s ease;
}

.card-surface.collapsed {
    transform: scaleX(0);
}

.card-back {
    background-image: url('../assets/card-back.png');
    background-size: cover;
    background-position: center;
    background-size: 400%;
    border-radius: 10px;
    box-shadow: 0 5px 10px -5px #303030, inset 0 0 0 10px #75d3ae;
}

.card-front {
    background-color: #f4fff2;
    border-radius: 10px;
    box-shadow: 0 5px 10px -5px #303030, inset 0 0 0 10px #996600;
}

.card.guessed .card-front {
    box-shadow: 0 5px 10px -5px #303030, inset 0 0 0 10px #75d3ae;
}

.card-front img {
    max-width: 80%;
    max-height: 80%;
}

</style>