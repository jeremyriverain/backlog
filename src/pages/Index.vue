<template>
  <q-page class="row justify-center items-center">
    <div style="max-width: 600px">
      <q-card>
        <q-card-section>
          <div class="row justify-between items-center">
            <div>
              <h1 class="text-h5 q-mb-none">Dev Tool</h1>
              <h2 class="text-subtitle1 q-mt-none">Priorisation Backlog</h2>
            </div>
            <div>
              <copy-button />
            </div>
          </div>
        </q-card-section>

        <question
          v-for="question in questions"
          :key="question.id"
          :question="question"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'
import metaStore from 'src/store/meta'
import Question from 'components/Question.vue'
import CopyButton from 'src/components/CopyButton.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Question,
    CopyButton,
  },
  setup() {
    const { questions } = questionStore()
    const { title } = metaStore()
    return {
      questions,
      title,
    }
  },
})
</script>
