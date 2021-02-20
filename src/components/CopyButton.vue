<template>
  <q-btn round icon="content_copy" flat @click="onClick">
    <q-badge floating v-if="canShowPriority">{{ priority }}</q-badge>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'
import { copyToClipboard } from 'quasar'

export default defineComponent({
  name: 'CopyButton',
  setup() {
    const {
      questions,
      canShowPriority,
      priority,
      markdownContent,
    } = questionStore()

    const onClick = () => {
      console.log(questions.value)
      copyToClipboard(markdownContent.value).catch((e) => console.log(e))
    }

    return {
      onClick,
      canShowPriority,
      priority,
    }
  },
})
</script>
