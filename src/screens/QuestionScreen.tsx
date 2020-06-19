import React, { useEffect, useState } from 'react'

import { IOption, IQuestion } from '../types'

import Button, { ButtonGroup } from '../components/Button'
import Footer from '../components/Footer'
import ScreenShell from '../components/ScreenShell'
import Text from '../components/Text'

const Question = ({ route: { params }, navigation: { navigate } }: any) => {
  const { quiz, questionId } = params
  const { title, options, correctOptionId } = quiz.questions.find(
    (question: IQuestion) => question.id === questionId,
  )

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null)
  const [correct, setCorrect] = useState<boolean | null>(null)

  const handleCheck = () => setCorrect(correctOptionId === selectedOptionId)

  const handleNext = () => {
    if (quiz.questions[quiz.questions.length - 1].id === questionId) {
      return navigate('EndScreen')
    }

    if (quiz.questions[quiz.questions.length - 2].id === questionId) {
      return navigate('DelightScreen', { quiz, questionId: questionId + 1 })
    }

    navigate('QuestionScreen', { quiz, questionId: questionId + 1 })
  }

  useEffect(() => {
    setSelectedOptionId(null)
    setCorrect(null)
  }, [questionId])

  return (
    <ScreenShell>
      <Text size="lg">{title}</Text>
      <ButtonGroup>
        {options.map((option: IOption, key: number) => (
          <Button
            key={key}
            title={option.title}
            disabled={correct ? selectedOptionId !== option.id : false}
            ruledOut={correct === false ? selectedOptionId === option.id : false}
            selected={selectedOptionId === option.id}
            onPress={() => {
              setSelectedOptionId(selectedOptionId === option.id ? null : option.id)
              setCorrect(null)
            }}
          />
        ))}
      </ButtonGroup>
      <Footer>
        <Button
          centered
          title={footerButtonTitle(correct)}
          disabled={selectedOptionId === null}
          onPress={() => correct ? handleNext() : handleCheck()}
        />
      </Footer>
    </ScreenShell>
  )
}

const footerButtonTitle = (correct: boolean | null) => {
  switch (correct) {
    case true:
      return 'Correct! Next Question'
    case false:
      return 'Oops! Check Again'
    case null:
      return 'Check Answer'
  }
}

export default Question
