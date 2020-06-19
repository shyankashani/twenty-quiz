import React from 'react'
import { Image as ImageNative } from 'react-native'

import styles from './Image.styles'

interface IProps {
  source: string
}

const Image = ({ source }: IProps) => (
  <ImageNative style={styles.container} source={{ uri: source }} />
)

export default Image
