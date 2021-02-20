<template>
  <q-btn round icon="content_copy" flat @click="onClick">
    <q-badge floating v-if="canShowPriority">{{ priority }}</q-badge>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'
export default defineComponent({
  name: 'CopyButton',
  setup() {
    const { questions, canShowPriority, priority } = questionStore()
    const onClick = () => {
      console.log(questions.value)
    }
    return {
      onClick,
      canShowPriority,
      priority,
    }
  },
})
</script>
