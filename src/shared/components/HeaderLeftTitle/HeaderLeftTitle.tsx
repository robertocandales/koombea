import { Dimensions, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import BackArrow from '../../icons/BackArrow'
import { useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('window')
interface IProps {
  name: string
  isBackArrow?: boolean
}

const HeaderLeftTitle: React.FC<IProps> = ({ name, isBackArrow = false }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => (isBackArrow ? navigation.goBack() : null)}
      style={styles.container}
    >
      {isBackArrow && <BackArrow />}
      <Text style={[styles.name, isBackArrow && { paddingLeft: width * 0.1 }]}>{name}</Text>
    </TouchableOpacity>
  )
}

export default HeaderLeftTitle
