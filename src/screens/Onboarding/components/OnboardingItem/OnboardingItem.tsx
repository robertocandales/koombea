import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

interface IProps {
  item: {
    id: number
    title: string
    image: string
  }
}
const OnboardingItem: React.FC<IProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.title}>
        <Text style={styles.text}> {item.title}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem
