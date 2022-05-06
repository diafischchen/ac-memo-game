<script>

export default {
    name: 'Villager',
    props: ['id'],
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
        }
    },
    methods: {
        flip() {
            this.flipped = !this.flipped;
        }
    }
}

</script>

<template>
<div class="card" @click="flip()">
    <div class="card-surface card-back" v-if="flipped">
        ?
    </div>
    <div class="card-surface card-front" v-else>
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
    box-shadow: 0 5px 10px -5px #303030;
}

.card-surface {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.card-back {
    background-image: url('/card-back.png');
    background-size: cover;
    background-position: center;
    background-size: 400%;
    border-radius: 10px;
}

.card-front {
    background-color: #f4fff2;
    border-radius: 10px;
    box-shadow: inset 0 0 0 10px #996600;
}

.card-front img {
    max-width: 80%;
    max-height: 80%;
}

</style>