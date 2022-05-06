<script>

import Game from './components/Game.vue';

export default {
    name: "App",
    data() {
        return {};
    },
    components: { Game }
}

</script>

<template>

<div class="game">
    <Game :size="4" />
</div>

</template>

<style>

body {
    background-color: #303030;
}

</style>