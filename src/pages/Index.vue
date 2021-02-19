<template>
  <q-page class="row justify-center items-center">
    <div style="max-width: 600px">
      <q-card>
        <q-card-section>
          <div class="row justify-between items-center">
            <h1 class="text-h5">Priorisation backlog</h1>
            <div>
              <q-btn round icon="content_copy" flat>
                <q-badge floating>4</q-badge>
              </q-btn>
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
import Question from 'components/Question.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Question,
  },
  setup() {
    const { questions } = questionStore()
    return {
      questions: questions.value,
    }
  },
})
</script>
