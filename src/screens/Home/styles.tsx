import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  wrapperUniverses: {
    flex: 0.1,
    width,
    alignItems: 'flex-start'
  },
  loader: {
    width,
    flex: 1
  },
  wrapperFighters: {
    flex: 0.9,
    width
  }
})

export default styles
