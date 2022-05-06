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
                '/villagers/eufemia_nh.png',
                '/villagers/huschke_nh.png',
                '/villagers/melinda_nh.png',
                '/villagers/mimmi_nh.png',
                '/villagers/pullunda_nh.png',
                '/villagers/sophie_nh.png',
                '/villagers/trita_nh.png',
                '/villagers/vega_nh.png',
            ],
            flipped: true,
            cardCollapse: false,
        }
    },
    methods: {
        flip() {
            if (!this.state.animation) {
                this.state.animation = true;

                this.cardCollapse = !this.cardCollapse;

                setTimeout(() => {
                    this.flipped = !this.flipped;
                    setTimeout(() => {
                        this.cardCollapse = !this.cardCollapse;
                        setTimeout(() => {
                            this.state.animation = false;
                        }, 200);
                    }, 30)
                }, 200)
            }
        }
    }
}

</script>

<template>
<div class="card" @click="flip()">
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
    background-image: url('/card-back.png');
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

.card-front img {
    max-width: 80%;
    max-height: 80%;
}

</style>