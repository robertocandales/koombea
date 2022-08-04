import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/stateHooks'
import { fighterListThunk, universesListThunk } from '../../state/slices/fighters/thunks'
import ContainerScreen from '../../shared/components/ContainerScreen/ContainerScreen'
import HorizontalUniversesList from './components/HorizontalUniversesList/HorizontalUniversesList'
import VerticalFighterList from './components/VerticalFighterList/VerticalFighterList'
import Loader from '../../shared/components/Loader/Loader'
import { View } from 'react-native'
import styles from './styles'

const Home = () => {
  const dispatch = useAppDispatch()
  const { isLoadingFighterList, isLoadingUniversesList } = useAppSelector(store => store.fighter)

  useEffect(() => {
    dispatch(universesListThunk())
    dispatch(fighterListThunk())
  }, [])

  return (
    <ContainerScreen>
      {isLoadingFighterList && isLoadingUniversesList ? (
        <>
          <Loader />
        </>
      ) : (
        <View style={styles.container}>
          <View style={styles.wrapperUniverses}>
            {isLoadingUniversesList ? (
              <View style={styles.loader}>
                <Loader />
              </View>
            ) : (
              <HorizontalUniversesList />
            )}
          </View>

          <View style={styles.wrapperFighters}>
            {isLoadingFighterList ? <Loader /> : <VerticalFighterList />}
          </View>
        </View>
      )}
    </ContainerScreen>
  )
}

export default Home
