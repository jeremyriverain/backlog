<template>
  <q-badge floating v-if="canShowPriority" color="orange-8">{{
    priority
  }}</q-badge>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'

export default defineComponent({
  name: 'PriorityBadge',
  setup() {
    const { canShowPriority, priority } = questionStore()

    return {
      canShowPriority,
      priority,
    }
  },
})
</script>
