import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/theme'
const { width } = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width,
    justifyContent: 'center'
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    width: 10
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: Colors.White,
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    bottom: 30
  }
})

export default styles
