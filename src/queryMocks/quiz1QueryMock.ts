import quizzes from '../data/quizzes'
import { QUIZ_QUERY } from '../screens/StartScreen'

export default {
  request: {
    query: QUIZ_QUERY,
    variables: {
      quizId: 1,
    },
  },
  result: {
    data: {
      quiz: quizzes[1],
    },
  },
}
