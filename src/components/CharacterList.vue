<template>
    <div>
        <button v-for="char in characters" :key="char.name">{{char.name}}</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class CharacterList extends Vue {
    private get characters() { return store.getters.characters; }
}
</script>

<style lang="scss" scoped>
div {
    text-align: left;
}

button {
    width: 100%;
    background: grey;
    color: white;
    border: none;
    transition: background .4s, color .4s;

    &:hover {
        background: white;
        color: grey;
    }
}
</style>
