import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../shared/theme'
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },
  wrapperTopElements: {
    flex: 1,
    backgroundColor: Colors.White
  },
  wrapperFilter: {
    paddingLeft: width * 0.044,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: height * 0.0298,
    backgroundColor: Colors.White,
    marginBottom: 1
  },
  wrapperTitle: {
    paddingTop: height * 0.026,
    alignItems: 'flex-start',
    backgroundColor: Colors.White
  },
  title: {
    color: Colors.SoftGray,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14
  },
  text: {
    color: Colors.SoftBlack,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: width * 0.072
  },
  containerBottom: {
    flex: 1,
    backgroundColor: Colors.Background,
    justifyContent: 'space-between'
  },
  filterByWrapper: {
    paddingLeft: width * 0.044,
    marginVertical: height * 0.015,
    backgroundColor: Colors.White,
    height: height * 0.2
  },
  flatList: {
    backgroundColor: Colors.Background,
    width
  },
  rate: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapperButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginTop: height * 0.1
  }
})

export default styles
