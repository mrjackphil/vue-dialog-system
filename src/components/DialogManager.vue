<template>
    <div class="dialog">
        <input name="add-char" @keypress.enter="addChar" type="text" v-model="character">
        <button name="add-char" @click="addChar">Add Character</button>
        <input name="add-dialog" @keypress.enter="addDialog" type="text" v-model="dialog">
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
    private addDialog() { store.dispatch('addDialog', this.dialog); }
}
</script>

