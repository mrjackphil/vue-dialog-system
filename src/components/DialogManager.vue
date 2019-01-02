<template>
    <div class="dialog">
        <input name="add-char" type="text" v-model="character">
        <button name="add-char" @click="addChar">Add Character</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class DialogManager extends Vue {
    private character = '';

    private addChar() {
        const ch = this.character as string;

        if (ch.length && !charExist(store.state, ch)) { store.commit('addCharacter', ch); }

        function charExist(state: { characters: Array<{}> }, name: string) {
            return Object.keys(state.characters).includes(name);
        }
    }

}

</script>

<style lang="scss" scoped>

</style>

