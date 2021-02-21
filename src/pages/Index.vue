<template>
  <q-page class="row justify-center items-center">
    <div style="max-width: 600px">
      <q-card :flat="q.platform.is.bex">
        <priority-badge v-if="!q.platform.is.bex" />
        <h1 class="q-pt-md q-px-md text-h5 q-mb-none" v-if="!q.platform.is.bex">
          Priorisation Backlog
        </h1>

        <question
          v-for="question in questions"
          :key="question.id"
          :question="question"
        />
        <q-separator />

        <q-card-actions align="between" v-if="!q.platform.is.bex">
          <q-btn icon="clear" color="negative" flat @click="reset"
            >Rafraîchir</q-btn
          >
          <q-btn icon="content_copy" color="primary" flat @click="onCopy"
            >Copier
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>

  <q-page-sticky
    position="bottom-right"
    :offset="[18, 18]"
    v-if="q.platform.is.bex"
  >
    <copy-button />
  </q-page-sticky>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'
import questionStore from 'src/store/question'
import metaStore from 'src/store/meta'
import Question from 'components/Question.vue'
import CopyButton from 'src/components/CopyButton.vue'
import PriorityBadge from 'components/PriorityBadge.vue'
import { copyToClipboard } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  components: {
    CopyButton,
    PriorityBadge,
    Question,
  },
  setup() {
    const q = useQuasar()
    const {
      questions,
      canShowPriority,
      markdownContent,
      reset,
    } = questionStore()
    const { title } = metaStore()

    const onCopy = () => {
      console.log(questions.value)
      copyToClipboard(markdownContent.value).catch((e) => console.log(e))
    }

    return {
      questions,
      title,
      canShowPriority,
      onCopy,
      reset,
      q,
    }
  },
})
</script>
