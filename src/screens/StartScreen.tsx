import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'

import Button from '../components/Button'
import Footer from '../components/Footer'
import Image from '../components/Image'
import ScreenShell from '../components/ScreenShell'
import Text from '../components/Text'

export const QUIZ_QUERY = gql`
  query getQuiz($quizId: Number) {
    quiz(quizId: $quizId) {
      id
      title
      description
      image
      questions {
        id
        title
        correctOptionId
        options {
          id
          title
        }
      }
    }
  }
`

const StartScreen = ({ route: { params }, navigation: { navigate } }: any) => {
  const { quizId } = params
  const { data } = useQuery(QUIZ_QUERY, { variables: { quizId } })

  if (data) {
    const { quiz } = data
    const { description, image, title, questions } = quiz

    return (
      <ScreenShell>
        <Text size="lg">
          {title}
        </Text>
        <Image source={image} />
        <Text size="sm">
          {description}
        </Text>
        <Footer>
          <Button
            centered
            title="Start"
            onPress={() => navigate('MainStackScreens', {
              params: { questionId: questions[0].id, quiz },
              screen: 'QuestionScreen',
            })}
          />
        </Footer>
      </ScreenShell>
    )
  }

  return null
}

export default StartScreen
