<script>

import Game from './components/Game.vue';

export default {
    name: "App",
    data() {
        return {};
    },
    components: { Game },
    methods: {
        reset() {
            this.$refs.game.reset();
        }
    },
}

</script>

<template>

<div class="game" id="game">
    <Game :size="4" ref="game" />
</div>
<button @click="reset">Reset</button>

</template>

<style>

@import url('./assets/css/font.css');

body {
    background-color: #303030;
    background-image: url('./assets/ground-pattern.png');
    background-repeat: repeat;
    background-size: 200px;
    font-family: 'Zilla Slab', serif;
    font-weight: 700;
}

</style>