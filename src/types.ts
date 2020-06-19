export interface IOption {
  id: number
  title: string
}

export interface IQuestion {
  id: number
  title: string
  options: IOption[]
  correctOptionId: number
}

export interface IQuiz {
  id: number
  title: string
  image: string
  description: string
  questions: IQuestion[]
}
