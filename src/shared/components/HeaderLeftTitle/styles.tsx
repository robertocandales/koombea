import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    color: Colors.White
  }
})

export default styles
