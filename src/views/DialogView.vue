<template>
  <div class="wrapper">
    <div class="top">
      <dialog-manager></dialog-manager>
    </div>
    <div class="manager">
      <div class="left">
        <character-list></character-list>
      </div>
      <div class="center">
        <dialog-list></dialog-list>
      </div>
      <div class="right">
        <dialog-viewer></dialog-viewer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DialogManager from '@/components/DialogManager.vue';
import DialogViewer from '@/components/DialogViewer.vue';
import DialogList from '@/components/DialogList.vue';
import CharacterList from '@/components/CharacterList.vue';

@Component({
  components: { DialogManager, CharacterList, DialogList, DialogViewer },
})
export default class DialogView extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 2rem;
  left: 0;
}

.manager {
  display: flex;
  padding: 1rem;
  justify-content: space-around;
}

</style>
