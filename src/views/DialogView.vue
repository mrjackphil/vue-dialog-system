<template>
  <div>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DialogManager from '@/components/DialogManager.vue';
import DialogList from '@/components/DialogList.vue';
import CharacterList from '@/components/CharacterList.vue';

@Component({
  components: { DialogManager, CharacterList, DialogList },
})
export default class DialogView extends Vue {}
</script>

<style lang="scss" scoped>
.manager {
  position: fixed;
  overflow: hidden;
  display: flex;
}

.right {
  flex: 1;
}

</style>
