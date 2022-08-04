import { View, Text } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

import styles from './styles'
import ContainerScreen from '../../shared/components/ContainerScreen/ContainerScreen'
import Rate from '../../shared/components/Rate/Rate'

const FighterDetails = props => {
  const { route } = props
  console.log(route?.params, 'route')
  return (
    <ContainerScreen>
      {route?.params && (
        <View style={styles.container}>
          <View style={styles.topWrapper}>
            <View style={styles.side}>
              <>
                <Text style={styles.title}>{route.params.universe} </Text>
              </>
              <>
                <Text style={styles.text}>{route.params.name}</Text>
              </>
              <View style={styles.rateContainer}>
                <Rate rateNumber={route.params.rate} />
              </View>
              <>
                <Text>Downloads: {route.params.downloads}</Text>
              </>
              <View style={styles.price}>
                <Text style={styles.priceText}>${route.params.price}</Text>
              </View>
            </View>
            <View style={styles.side}>
              <FastImage source={{ uri: route?.params?.imageURL }} style={styles.image} />
            </View>
          </View>
          <>
            <Text style={[styles.text, { lineHeight: 27 }]}>{route.params.description}</Text>
          </>
        </View>
      )}
    </ContainerScreen>
  )
}

export default FighterDetails
