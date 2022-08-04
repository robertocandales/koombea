import { View, Text, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CheckBox from '@react-native-community/checkbox'
import { Colors } from '../../shared/theme'
import Rate from '../../shared/components/Rate/Rate'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/stateHooks'
import {
  fighterOrderedAction,
  filterByRateAction,
  filterSortByAction
} from '../../state/slices/fighters'
import useSortArray from '../../shared/hooks/useSortArray'
import CustomBotton from '../../shared/components/CustomBotton/CustomBotton'
const { width } = Dimensions.get('window')

export interface IData {
  id: number
  name: string
  value: boolean
}
const data: IData[] = [
  {
    id: 1,
    name: 'Name',
    value: false
  },
  {
    id: 2,
    name: 'Price',
    value: false
  },
  {
    id: 3,
    name: 'Rate',
    value: false
  },
  {
    id: 4,
    name: 'Downloads',
    value: false
  }
]

const FilterFighters = () => {
  const dispatch = useAppDispatch()
  const { filterSortBy, filterByRate, fighterListOriginal } = useAppSelector(store => store.fighter)
  useSortArray(filterSortBy)
  const [checkBoxValue, setCheckBoxValue] = useState<IData>(filterSortBy)
  const [startRateValue, setstartRateValue] = useState(filterByRate)

  const filterSelected = () => {
    dispatch(filterSortByAction(checkBoxValue))
    dispatch(filterByRateAction(startRateValue))
  }

  const resetFilterSelected = () => {
    dispatch(filterSortByAction({ id: 0, name: '', value: false }))
    dispatch(filterByRateAction(null))
    dispatch(fighterOrderedAction(fighterListOriginal))
    setCheckBoxValue({ id: 0, name: '', value: false })
    setstartRateValue(null)
  }

  const byRateFilter = (rateFilter: number | null) => {
    setstartRateValue(rateFilter)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapperTopElements}>
          <FlatList
            style={styles.flatList}
            ListHeaderComponent={
              <>
                <View style={[styles.wrapperTitle, { paddingLeft: width * 0.044 }]}>
                  <Text style={[styles.title]}> Sort by </Text>
                </View>
              </>
            }
            ListFooterComponent={
              <>
                <View style={styles.containerBottom}>
                  <View style={styles.filterByWrapper}>
                    <View style={styles.wrapperTitle}>
                      <Text style={[styles.title]}> Filter by </Text>
                    </View>
                    <View style={styles.rate}>
                      <Rate
                        rateNumber={startRateValue ?? 0}
                        width="30"
                        height="30"
                        disabled={false}
                        onPress={byRateFilter}
                      />
                    </View>
                  </View>
                  <View style={styles.wrapperButtons}>
                    <CustomBotton name="Reset" onPress={() => resetFilterSelected()} />
                    <CustomBotton
                      name="Apply"
                      onPress={() => filterSelected()}
                      disabled={checkBoxValue.id === 0 && startRateValue === null}
                    />
                  </View>
                </View>
              </>
            }
            data={data}
            renderItem={({ item }) => (
              <>
                <View style={styles.wrapperFilter}>
                  <CheckBox
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    lineWidth={1}
                    value={item.id === checkBoxValue.id && checkBoxValue?.value ? true : false}
                    onValueChange={() => setCheckBoxValue({ ...item, value: !item.value })}
                    tintColors={{ false: Colors.SoftBlack, true: Colors.Header }}
                    tintColor={Colors.SoftBlack}
                    onFillColor={Colors.Header}
                  />

                  <Text style={styles.text}> {item.name} </Text>
                </View>
              </>
            )}
          />
        </View>
      </View>
    </>
  )
}

export default FilterFighters
