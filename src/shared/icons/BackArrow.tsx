import Svg, { Path } from 'react-native-svg'
import React from 'react'

const BackArrow: React.FC = () => {
  return (
    <>
      <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z"
          fill="white"
        />
      </Svg>
    </>
  )
}

export default BackArrow
