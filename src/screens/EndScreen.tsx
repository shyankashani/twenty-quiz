import React from 'react'

import Button from '../components/Button'
import Footer from '../components/Footer'
import ScreenShell from '../components/ScreenShell'
import Text from '../components/Text'

const EndScreen = ({ navigation }: any) => {
  return (
    <ScreenShell>
      <Text size="lg">
        You've completed this quiz! Awesome work.
      </Text>
      <Footer>
        <Button
          centered
          title="Back to Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </Footer>
    </ScreenShell>
  )
}

export default EndScreen
