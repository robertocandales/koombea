import { Dimensions, StyleSheet } from 'react-native'
const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  wrapperScreen: {
    flex: 1,
    paddingVertical: height * 0.026
  }
})

export default styles
