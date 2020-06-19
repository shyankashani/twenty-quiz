import React from 'react'
import { View } from 'react-native'

import styles from './Footer.styles'

interface IProps {
  children: React.ReactNode
}

const Footer = ({ children }: IProps) => (
  <View style={styles.container}>
    {children}
  </View>
)

export default Footer
