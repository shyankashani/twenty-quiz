import React from 'react'
import { View } from 'react-native'

import styles from './ScreenShell.styles'

interface IProps {
  children: React.ReactNode
}

const ScreenShell = ({ children }: IProps) => (
  <View style={styles.container}>
    {children}
  </View>
)

export default ScreenShell
