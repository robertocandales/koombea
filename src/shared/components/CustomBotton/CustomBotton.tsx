import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'
const { width, height } = Dimensions.get('window')

interface IProps {
  name: string
  onPress: () => void
  disabled?: boolean
}

const CustomBotton: React.FC<IProps> = ({ name = 'name', onPress, disabled = false }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </>
  )
}

export default CustomBotton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.White,
    borderRadius: 6,
    width: width * 0.42,
    height: height * 0.068,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
    color: Colors.SoftBlack
  }
})
