import React, { useEffect, useState } from 'react'
import Onboarding from '../../../screens/Onboarding/Onboarding'
import { initializeState } from '../../../state/slices/fighters/thunks'
import { useAppDispatch, useAppSelector } from '../../hooks/stateHooks'
import SplashScreen from 'react-native-splash-screen'

interface IProps {
  children: React.ReactNode
}

const AppContainer: React.FC<IProps> = ({ children }) => {
  const [isLoading, setIsloading] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const { isOnboardingCompleted } = useAppSelector(store => store.fighter)

  const initilizeApp = async () => {
    await dispatch(initializeState())
    SplashScreen.hide()
    setIsloading(false)
  }

  useEffect(() => {
    initilizeApp()
  }, [])

  return <>{!isLoading && <>{!isOnboardingCompleted ? <Onboarding /> : children}</>}</>
}

export default AppContainer
