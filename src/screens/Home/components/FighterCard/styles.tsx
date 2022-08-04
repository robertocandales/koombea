import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../../../shared/theme'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    height: height * 0.1,
    justifyContent: 'space-between',
    marginVertical: height * 0.021,
    paddingHorizontal: width * 0.036
  },
  details: {
    flexDirection: 'row'
  },
  image: { justifyContent: 'center', alignItems: 'center', width: width * 0.2 },
  informationFighter: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: width * 0.036
  },
  rateDwnlAndPriceWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.SoftBlack
  }
})

export default styles
