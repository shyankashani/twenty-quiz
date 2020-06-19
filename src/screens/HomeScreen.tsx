import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'

import { IQuiz } from '../types'

import Button, { ButtonGroup } from '../components/Button'
import ScreenShell from '../components/ScreenShell'
import Text from '../components/Text'

export const QUIZZES_QUERY = gql`
  query getQuizzes {
    quizzes {
      id
      image
      title
      description
    }
  }
`

const HomeScreen = ({ navigation: { navigate } }: any) => {
  const { data } = useQuery(QUIZZES_QUERY)

  if (data) {
    const { quizzes } = data

    return (
      <ScreenShell>
        <Text size="lg">Which quiz would you like to take?</Text>
        <ButtonGroup>
          {quizzes.map((quiz: IQuiz, key: number) => (
            <Button
              key={key}
              title={quiz.title}
              selected={false}
              onPress={() => navigate('StartScreen', { quizId: quiz.id })}
            />
          ))}
        </ButtonGroup>
      </ScreenShell>
    )
  }

  return null
}

export default HomeScreen
