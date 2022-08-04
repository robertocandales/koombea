import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Colors } from '../../../../shared/theme'
import ArrowRight from '../../../../shared/icons/ArrowRight'
import { useAppDispatch } from '../../../../shared/hooks/stateHooks'
import { saveOnboardingProcess } from '../../../../state/slices/fighters/thunks'

interface IProps {
  data: { id: number; title: string; image: string }[]
  currentIndex: number
}

const Paginator: React.FC<IProps> = ({ data, currentIndex }) => {
  const dispatch = useAppDispatch()

  const completeOnboarding = async () => {
    await dispatch(saveOnboardingProcess(true))
  }

  return (
    <View style={styles.container}>
      {data.map((_, index) => (
        <View
          style={[
            styles.dot,
            { backgroundColor: currentIndex === index ? Colors.SoftBlack : Colors.White }
          ]}
          key={String(index)}
        />
      ))}

      {currentIndex === data.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={completeOnboarding}>
          <ArrowRight />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Paginator
