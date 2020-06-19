import React from 'react'
import { Text as TextNative } from 'react-native'

import styles from './Text.styles'

interface IProps {
  children: string
  muted?: boolean
  strikethrough?: boolean
  size?: 'sm' | 'lg'
}

const Text = ({ children, muted, size, strikethrough }: IProps) => (
  <TextNative
    style={[
      styles[size || 'sm'],
      muted && styles.muted,
      strikethrough && styles.strikethrough,
    ]}
  >
    {children}
  </TextNative>
)

export default Text
