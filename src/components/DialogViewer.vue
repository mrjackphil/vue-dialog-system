<template>
    <div class="viewer">
        {{dialogue.name}}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';
import {fst, findById} from '../modules/arrays';

@Component
export default class DialogViewer extends Vue {
    private get dialogueID() { return store.state.activeDialog; }
    private get dialogue() {
        return fst(findById(store.state.dialogues, this.dialogueID));
    }
}
</script>
