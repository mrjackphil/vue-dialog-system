<template>
    <div class="dialog">
        <input name="add-char" type="text" v-model="character">
        <button name="add-char" @click="addChar">Add Character</button>
        <input name="add-dialog" type="text" v-model="dialog">
        <button name="add-dialog" @click="addDialog">Add Dialog</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class DialogManager extends Vue {
    private character = '';
    private dialog = '';

    private addChar() { store.dispatch('addChar', this.character); }
    private addDialog() { store.dispatch('addDialog', this.character); }
}
</script>

