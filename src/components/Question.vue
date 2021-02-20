<template>
  <div class="q-pa-md">
    <div v-if="!question.options">
      <q-toggle
        :label="question.label"
        :model-value="result"
        @update:modelValue="updateResult(question.id, $event)"
      />
    </div>

    <div v-else>
      {{ question.label }}
      <q-option-group
        :model-value="result"
        @update:modelValue="updateResult(question.id, $event)"
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
import { defineComponent, ref, watch } from 'vue'
import { Question, Result } from 'src/store/models'
import questionStore from 'src/store/question'
export default defineComponent({
  name: 'Question',
  props: {
    question: {
      type: Object as () => Question,
      required: true,
    },
  },
  setup(props) {
    const result = ref<Result>(null)
    watch(
      () => props.question.result,
      (newResult) => {
        result.value = newResult
      },
      {
        immediate: true,
      }
    )

    const { updateResult } = questionStore()
    return { result, updateResult }
  },
})
</script>
