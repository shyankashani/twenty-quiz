import React from 'react'

import Button from '../components/Button'
import Footer from '../components/Footer'
import Image from '../components/Image'
import ScreenShell from '../components/ScreenShell'
import Text from '../components/Text'

const DelightScreen = ({ route: { params }, navigation: { navigate } }: any) => (
  <ScreenShell>
    <Text size="lg">
      Just popping in to say you are doing so well!
    </Text>
    <Image source="https://bit.ly/3dnet2U" />
    <Footer>
      <Button centered title="Onward!" onPress={() => navigate('QuestionScreen', params)} />
    </Footer>
  </ScreenShell>
)

export default DelightScreen
