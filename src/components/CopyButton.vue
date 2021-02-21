<template>
  <q-btn
    round
    fab
    padding="sm"
    icon="content_copy"
    color="primary"
    @click="onClick"
  >
    <priority-badge></priority-badge>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'
import { copyToClipboard } from 'quasar'
import PriorityBadge from 'components/PriorityBadge.vue'

export default defineComponent({
  name: 'CopyButton',
  components: {
    PriorityBadge,
  },
  setup() {
    const { questions, markdownContent } = questionStore()

    const onClick = () => {
      console.log(questions.value)
      copyToClipboard(markdownContent.value).catch((e) => console.log(e))
    }

    return {
      onClick,
    }
  },
})
</script>
