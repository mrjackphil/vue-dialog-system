<template>
    <div class="viewer">
        <button @click="changeMode">{{edit ? 'Edit' : 'Read'}}</button>
        {{dialogue.name}}
        <input v-if="edit" @keypress.enter="setContent" type="textarea" v-model="text">
        <code v-if="!edit">{{dialogue.content}}</code>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import store from '../store';
import {fst, findById} from '../modules/arrays';

@Component
export default class DialogViewer extends Vue {
    private edit = false;
    private text = '';

    private get dialogueID() { return store.state.activeDialog; }
    private get dialogue() {
        return findById(store.state.dialogues, this.dialogueID);
    }
    private setContent() {
        store.commit('setDialogContent', {id: this.dialogue.id, content: this.text});
        this.changeMode();
    }

    @Watch('dialogue')
    private onDialogueChanged(val: string, oldVal: string) { this.updateInput(); }

    private updateInput() { this.text = this.dialogue.content; }

    private changeMode() {
        this.updateInput();
        this.edit = !this.edit;
    }
}
</script>
