import React from 'react'
import { View } from 'react-native'

import styles from './ButtonGroup.styles'

interface IProps {
  children: React.ReactNode
}

export const ButtonGroup = ({ children }: IProps) => (
  <View style={styles.container}>
    {children}
  </View>
)
