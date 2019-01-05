<template>
    <div class="viewer">
        {{dialogue.name}}
        <input @keypress.enter="setContent" type="textarea" v-model="text">
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';
import {fst, findById} from '../modules/arrays';

@Component
export default class DialogViewer extends Vue {
    private text = '';

    private get dialogueID() { return store.state.activeDialog; }
    private get dialogue() {
        return findById(store.state.dialogues, this.dialogueID);
    }
    private setContent() {
        store.commit('setDialogContent', {id: this.dialogue.id, content: this.text});
    }
}
</script>
