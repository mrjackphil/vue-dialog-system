<template>
  <div>
    <div class="top">
      <dialog-manager></dialog-manager>
    </div>
    <div class="left">
      <character-list></character-list>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DialogManager from '@/components/DialogManager.vue';
import CharacterList from '@/components/CharacterList.vue';

@Component({
  components: { DialogManager, CharacterList },
})
export default class DialogView extends Vue {}
</script>

<style lang="scss" scoped>
.left {
  position: fixed;
  overflow: hidden;
  width: 50%;
}

.right {
  position: fixed;
  overflow: hidden;
  right: 0;
  width: 50%;
}
</style>
