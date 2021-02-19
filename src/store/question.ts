import { ref, computed } from 'vue'
import { Question } from 'src/store/models'

const questions = ref<Question[]>([
  {
    id: 1,
    label: "Pouvons-nous en définir clairement le périmètre et l'étendue ?",
  },
  {
    id: 2,
    label: 'Pouvons nous le faire bien ?',
  },
  {
    id: 3,
    label: 'Est-ce que ça sert la vision produit* ?',
    help:
      '* Proposer la meilleure expérience de développement possible aux développeurs front arkea',
  },
  {
    id: 4,
    label: "Est-ce ça améliore / complète l'expérience développeur actuelle ?",
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
  return {
    questions: computed(() => questions.value),
  }
}
