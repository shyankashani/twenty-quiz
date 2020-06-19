import React from 'react'
import { TouchableOpacity } from 'react-native'

import Text from '../Text'
import styles from './Button.styles'

interface IProps {
  title: string
  disabled?: boolean
  selected?: boolean
  centered?: boolean
  ruledOut?: boolean
  onPress: () => void
}

const Button = ({ title, selected, disabled, centered, ruledOut, onPress }: IProps) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[
      styles.container,
      selected && styles.selected,
      disabled && styles.disabled,
      centered && styles.centered,
    ]}
  >
    <Text muted={disabled} strikethrough={ruledOut}>
      {title}
    </Text>
  </TouchableOpacity>
)

export default Button
