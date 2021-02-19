<template>
  <div class="q-pa-md">
    <div v-if="!question.options">
      <q-toggle :label="question.label" v-model="value" toggle-indeterminate />
    </div>

    <div v-else>
      {{ question.label }}
      <q-option-group
        v-model="value"
        :options="question.options"
        color="primary"
        inline
      />
    </div>
    <div v-if="question.help" class="text-right">
      <small>{{ question.help }}</small>
    </div>
  </div>

  <q-separator />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Question } from './models'
export default defineComponent({
  name: 'Question',
  props: {
    question: {
      type: Object as () => Question,
      required: true,
    },
  },
  setup() {
    const value = ref(null)
    return { value }
  },
})
</script>
