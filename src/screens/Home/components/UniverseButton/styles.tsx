import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/theme'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.01,
    paddingHorizontal: width * 0.026,
    backgroundColor: Colors.Header,
    height: height * 0.054,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  buttonContainerActivated: {
    flex: 1,
    marginBottom: height * 0.02,
    marginHorizontal: width * 0.01,
    paddingHorizontal: width * 0.026,
    backgroundColor: Colors.Secondary,
    height: height * 0.054,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  name: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.White
  }
})

export default styles
