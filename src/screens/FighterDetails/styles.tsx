import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../shared/theme'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: width * 0.044
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: width * 0.044,
    marginBottom: height * 0.031
  },
  side: {
    flex: 1 / 2
  },
  image: {
    width: width * 0.44,
    height: height * 0.217
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24,
    color: Colors.SoftBlack
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: Colors.SoftBlack
  },
  rateContainer: {
    alignItems: 'stretch',
    paddingTop: height * 0.031,
    paddingBottom: height * 0.01
  },
  price: {
    minWidth: width * 0.23,
    minHeight: height * 0.054,
    backgroundColor: Colors.Header,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: height * 0.0077,
    paddingHorizontal: width * 0.038,
    marginTop: height * 0.024
  },
  priceText: {
    color: Colors.White,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27
  }
})

export default styles
