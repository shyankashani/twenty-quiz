import { IQuestion } from '../types'

import options from './options'

const questions: IQuestion[] = [
  {
    correctOptionId: 1,
    id: 0,
    options: options.slice(0, 4),
    title: 'Who is the captain of the Starship Enterprise?',
  },
  {
    correctOptionId: 3,
    id: 1,
    options: options.slice(0, 4),
    title: 'Who is the first officer aboard the Starship Enterprise?',
  },
  {
    correctOptionId: 4,
    id: 2,
    options: options.slice(4),
    title: 'Which planet is Major Kira Nerys from?',
  },
  {
    correctOptionId: 5,
    id: 3,
    options: options.slice(4),
    title: 'Where is Gul Dukat from?',
  },
]

export default questions
