import { FlatList, View } from 'react-native'
import React, { useCallback } from 'react'
import { useAppSelector } from '../../../../shared/hooks/stateHooks'
import UniverseButton from '../UniverseButton/UniverseButton'
import { Colors } from '../../../../shared/theme'

const HorizontalUniversesList = () => {
  const { universesList, filterActivated, isLoadingFighterList } = useAppSelector(
    store => store.fighter
  )

  const flatListOptimizationProps = {
    initialNumToRender: 5,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    keyExtractor: useCallback(e => e.objectID, [])
  }

  return (
    <View>
      <FlatList
        style={{ backgroundColor: Colors.White }}
        data={universesList}
        renderItem={({ item }) => (
          <UniverseButton
            item={item}
            filterActivated={filterActivated}
            isLoadingFighterList={isLoadingFighterList}
          />
        )}
        {...flatListOptimizationProps}
      />
    </View>
  )
}

export default HorizontalUniversesList
