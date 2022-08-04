import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  flatList: {
    backgroundColor: Colors.Background,
    width
  }
})

export default styles
