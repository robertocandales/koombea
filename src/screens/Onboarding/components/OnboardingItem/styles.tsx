import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/theme'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width
  },
  image: {
    flex: 0.9,
    justifyContent: 'center',
    resizeMode: 'contain',
    width: width * 0.83,
    height: height * 0.39
  },
  title: {
    flex: 0.1
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: Colors.White
  }
})

export default styles
