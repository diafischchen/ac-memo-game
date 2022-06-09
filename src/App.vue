<script>

import Game from './components/Game.vue';

export default {
    name: "App",
    data() {
        return {
            loading: true,
        };
    },
    components: { Game },
    created() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
}

</script>

<template>

<Transition name="fade">
    <div v-if="loading" class="loading-div">
        <img src="./assets/install.gif" />
        <div>Loading...</div>
    </div>
</Transition>

<div class="game" id="game">
    <Game :size="4" ref="game" />
</div>


</template>

<style>

body {
    background-color: #303030;
    background-image: url('./assets/ground-pattern.png');
    background-repeat: repeat;
    background-size: 200px;
    font-family: 'Zilla Slab', serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
}

.loading-div {
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    flex-direction: column;
    font-size: 2rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>