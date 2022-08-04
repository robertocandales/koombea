import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Start from '../../icons/Start'

interface IProps {
  rateNumber: number
  width?: string
  height?: string
  disabled?: boolean
  onPress?: (value: number | null) => void
}

const arrayOfStart = [
  {
    rate: 1,
    filled: false
  },
  {
    rate: 2,
    filled: false
  },
  {
    rate: 3,
    filled: false
  },
  {
    rate: 4,
    filled: false
  },
  {
    rate: 5,
    filled: false
  }
]

const Rate: React.FC<IProps> = ({ rateNumber, width = '16', height = '16', disabled, onPress }) => {
  const startsRateNumber = arrayOfStart.map(start => {
    if (start.rate <= rateNumber) {
      return { ...start, filled: true }
    }
    return start
  })

  return (
    <View style={styles.wrapperRate}>
      {startsRateNumber.map(start => (
        <Start
          filled={start.filled}
          key={start.rate}
          rate={start.rate}
          width={width}
          height={height}
          disabled={disabled}
          onPress={onPress}
        />
      ))}
    </View>
  )
}

export default Rate

const styles = StyleSheet.create({
  wrapperRate: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
