import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../../../shared/theme'

const Divider = () => {
  return <View style={styles.devider} />
}

export default Divider

const styles = StyleSheet.create({
  devider: {
    borderBottomColor: Colors.divider,
    borderWidth: 1
  }
})
