import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import FastImage from 'react-native-fast-image'
import Divider from '../Divider/Divider'
import { fighterDataFormated } from '../VerticalFighterList/VerticalFighterList'

interface IProps {
  item: fighterDataFormated
}
const FighterCard: React.FC<IProps> = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => item.detailsOnpress()}>
      <View style={styles.containerCard}>
        <View style={styles.details}>
          <FastImage source={{ uri: item?.imageURL }} style={styles.image} />
          <View style={styles.informationFighter}>
            <Text style={[styles.text, { fontWeight: '700' }]}>{item?.name} </Text>
            <Text style={styles.text}>{item?.universe}</Text>
          </View>
        </View>

        <View style={styles.rateDwnlAndPriceWrapper}>
          <Text style={styles.text}>Price:${item?.price}</Text>
          <Text style={styles.text}>Rate: {item?.rate} </Text>
          <Text style={styles.text}>Download: {item?.downloads} </Text>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  )
}

export default FighterCard
