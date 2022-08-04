import { View, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from './styles'
import data from './data'
import OnboardingItem from './components/OnboardingItem/OnboardingItem'
import Paginator from './components/Paginator/Paginator'

const Onboarding = () => {
  const [currentIndex, setcurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const viewableItemChanged = useRef(({ viewableItems }: any) => {
    setcurrentIndex(viewableItems[0].index)
  }).current
  const slideRef = useRef(null)

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => String(item.id)}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator data={data} currentIndex={currentIndex} />
    </View>
  )
}

export default Onboarding
