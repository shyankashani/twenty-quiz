import quizzes from '../data/quizzes'
import { QUIZ_QUERY } from '../screens/StartScreen'

export default {
  request: {
    query: QUIZ_QUERY,
    variables: {
      quizId: 0,
    },
  },
  result: {
    data: {
      quiz: quizzes[0],
    },
  },
}
