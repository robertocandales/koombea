import Svg, { Path } from 'react-native-svg'
import React from 'react'
import { TouchableOpacity } from 'react-native'

interface IProps {
  filled: boolean
  height?: string
  width?: string
  rate: number
  onPress?: (value: number | null) => void
  disabled?: boolean
}

const Start: React.FC<IProps> = ({
  filled,
  width = '38',
  height = '38',
  rate,
  onPress,
  disabled = true
}) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(rate)} disabled={disabled}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9998 31.4547L7.44119 37.7741L9.64868 24.3895L0.297579 14.9104L13.2205 12.9576L18.9998 0.77989L24.7791 12.9576L37.702 14.9104L28.3509 24.3895L30.5584 37.7741L18.9998 31.4547Z"
          fill={filled ? '#FFCD00' : '#979797'}
        />
      </Svg>
    </TouchableOpacity>
  )
}

export default Start
