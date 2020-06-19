import quizzes from '../data/quizzes'
import { QUIZZES_QUERY } from '../screens/HomeScreen'

export default {
  request: {
    query: QUIZZES_QUERY,
  },
  result: {
    data: {
      quizzes,
    },
  },
}
