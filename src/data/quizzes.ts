import { IQuiz } from '../types'

import questions from './questions'

const quizzes: IQuiz[] = [
  {
    description: 'Space... the final frontier! Test your knowledge of this classic series.',
    id: 0,
    image: 'https://bit.ly/2YNyGcI',
    questions: questions.slice(0, 2),
    title: 'The Next Generation',
  },
  {
    description: 'A wormhole has opened to the Delta quadrant... how well do you know DS9?',
    id: 1,
    image: 'https://bit.ly/2NclKrE',
    questions: questions.slice(2),
    title: 'Deep Space Nine',
  },
]

export default quizzes
