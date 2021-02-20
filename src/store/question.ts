import { ref, computed } from 'vue'
import { Question, Result } from 'src/store/models'

const questions = ref<Question[]>([
  {
    id: 1,
    label: "Pouvons-nous en définir clairement le périmètre et l'étendue ?",
    result: false,
  },
  {
    id: 2,
    label: 'Pouvons nous le faire bien ?',
    result: false,
  },
  {
    id: 3,
    label: 'Est-ce que ça sert la vision produit ?',
    result: false,
  },
  {
    id: 4,
    label: "Est-ce ça améliore / complète l'expérience développeur actuelle ?",
    result: null,
    options: [
      {
        value: 1,
        label: 'Un peu',
      },
      {
        value: 2,
        label: 'Moyennement',
      },
      {
        value: 3,
        label: 'Beaucoup',
      },
    ],
  },
  {
    id: 5,
    label: 'Est-ce que ça impacte:',
    result: null,
    options: [
      {
        value: 1,
        label: "Peu d'utilisateurs",
      },
      {
        value: 2,
        label: 'Une partie des utilisateurs',
      },
      {
        value: 3,
        label: 'La majorité des utilisateurs',
      },
      {
        value: 4,
        label: 'Tous les utilisateurs',
      },
    ],
  },
  {
    id: 6,
    label:
      "Pouvons-nous le concevoir de telle manière que l'impact soit supérieur à l'effort fourni ?",
    result: null,
    options: [
      {
        value: 1,
        label: 'ROI faible',
      },
      {
        value: 2,
        label: 'ROI moyen',
      },
      {
        value: 3,
        label: 'ROI élevé',
      },
    ],
    help: 'ROI = Return on Investment',
  },
  {
    id: 7,
    label: "Est-ce que ça servira toujours l'expérience développeur à:",
    result: null,
    options: [
      {
        value: 1,
        label: 'Court terme (0 - 6 mois)',
      },
      {
        value: 2,
        label: 'Moyen terme  (6 mois - 1 an)',
      },
      {
        value: 3,
        label: 'Long terme (+ 1 an)',
      },
    ],
  },
])

export default function () {
  const updateResult = (id: number, result: Result): Question | null => {
    const index = questions.value.findIndex((q) => q.id === id)

    if (index === -1) {
      return null
    }

    const question = questions.value[index]
    question.result = result
    questions.value.splice(index, 1, question)

    questions.value = [...questions.value]
    return question
  }

  const canShowPriority = computed(() => {
    return !questions.value.find((q) => q.result === false)
  })

  const priority = computed(() => {
    if (!canShowPriority.value) {
      return null
    }

    let result = 0

    questions.value
      .filter((q) => typeof q.result === 'number')
      .forEach((q) => (result += q.result as number))

    return result
  })

  const markdownHeader = `| Question | Réponse | Poids |
| ------------- | ------------- | ------------- |`

  const formatResult = (question: Question): string => {
    const result = question.result
    if (!question.options && result === null) {
      return ''
    }

    if (typeof result === 'boolean') {
      return result ? '✅' : '❌'
    }

    let options = ''
    question.options?.forEach((option, i) => {
      if (i) {
        options += '<br>'
      }
      options +=
        result === option.value
          ? `- **${option.label}** ✔️`
          : '- ' + option.label
    })

    return options
  }

  const formatWeight = (question: Question): string => {
    if (typeof question.result === 'boolean') {
      return 'NS'
    }

    if (!canShowPriority.value || question.result === null) {
      return ''
    }

    return question.result.toString()
  }

  const markdownContent = computed(() => {
    let content = markdownHeader

    questions.value.forEach((q) => {
      content += `\n| ${q.label} | ${formatResult(q)} | ${formatWeight(q)} |`
    })

    return content
  })

  return {
    questions: computed(() => questions.value),
    updateResult,
    canShowPriority,
    priority,
    markdownContent,
  }
}
