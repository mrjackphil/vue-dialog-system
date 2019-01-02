<template>
  <!-- <div></div> -->
    <dialog-manager></dialog-manager>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DialogManager from '@/components/DialogManager.vue';

@Component({
  components: { DialogManager },
})
export default class DialogView extends Vue {}
</script>
