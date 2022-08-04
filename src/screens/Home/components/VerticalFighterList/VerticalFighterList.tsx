import { FlatList, RefreshControl } from 'react-native'
import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/stateHooks'
import FighterCard from '../FighterCard/FighterCard'
import { useNavigation } from '@react-navigation/native'
import { routes } from '../../../../navigation/routes'
import { fighterListThunk, universesListThunk } from '../../../../state/slices/fighters/thunks'
import styles from './styles'

export interface fighterDataFormated {
  objectID: string
  name: string
  universe: string
  price: string
  popular: boolean
  rate: number
  downloads: string
  description: string
  created_at: string
  imageURL: string
  detailsOnpress: any
}

const VerticalFighterList = () => {
  const dispatch = useAppDispatch()
  const { fighterList, isLoadingFighterList, isLoadingUniversesList } = useAppSelector(
    store => store.fighter
  )
  const navigation = useNavigation()
  const flatListOptimizationProps = {
    initialNumToRender: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    showsVerticalScrollIndicator: false,
    keyExtractor: useCallback(e => e.name, [])
  }

  const dataFormated: fighterDataFormated[] = fighterList?.map(fighter => ({
    ...fighter,
    detailsOnpress: () => navigation.navigate(routes.FIGHTERDETAILS, fighter)
  }))

  const refreshData = async () => {
    await dispatch(universesListThunk())
    await dispatch(fighterListThunk())
  }
  return (
    <>
      <FlatList
        style={styles.flatList}
        {...flatListOptimizationProps}
        data={dataFormated}
        renderItem={FighterCard}
        refreshControl={
          <RefreshControl
            refreshing={isLoadingFighterList || isLoadingUniversesList}
            onRefresh={refreshData}
          />
        }
      />
    </>
  )
}

export default VerticalFighterList
