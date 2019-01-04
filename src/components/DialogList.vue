<template>
    <div>
        <div @click="dialogOn(d.id)" v-for="d in dialogs" :key="d.id">{{d.name}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

@Component
export default class DialogList extends Vue {
    private get dialogs() { return store.state.dialogues; }

    private dialogOn(id: number) { store.commit('activateDialog', id); }
}
</script>