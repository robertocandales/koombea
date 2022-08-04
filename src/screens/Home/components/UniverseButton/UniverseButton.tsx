import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { filterActivatedAction, IUniversesList } from '../../../../state/slices/fighters'
import { useAppDispatch } from '../../../../shared/hooks/stateHooks'
import {
  fighterListThunk,
  fightListFilterByUniversesListThunk
} from '../../../../state/slices/fighters/thunks'

interface IProps {
  item: IUniversesList
  filterActivated: string
  isLoadingFighterList: boolean
}

const UniverseButton: React.FC<IProps> = ({
  item: { name },
  filterActivated,
  isLoadingFighterList
}) => {
  const dispatch = useAppDispatch()

  const filterByUniverse = (univerSelected: string) => {
    if (univerSelected !== 'All') {
      dispatch(fightListFilterByUniversesListThunk(univerSelected))
      return
    }
    dispatch(fighterListThunk())
    dispatch(filterActivatedAction(univerSelected))
  }

  return (
    <>
      <TouchableOpacity
        disabled={isLoadingFighterList}
        onPress={() => filterByUniverse(name)}
        style={filterActivated === name ? styles.buttonContainerActivated : styles.buttonContainer}
      >
        <Text style={styles.name}>{name} </Text>
      </TouchableOpacity>
    </>
  )
}

export default UniverseButton
