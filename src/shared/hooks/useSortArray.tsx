import { useEffect } from 'react'
import { fighterOrderedAction, IFighter } from '../../state/slices/fighters'
import { useAppDispatch, useAppSelector } from './stateHooks'

const useSortArray = (filterSortBy: any) => {
  const dispatch = useAppDispatch()
  const { fighterListOriginal, filterByRate, fighterList, filterActivated } = useAppSelector(
    store => store.fighter
  )

  const sortArray = (a: IFighter, b: IFighter) => {
    const nameA =
      filterSortBy.name !== 'Rate'
        ? a[filterSortBy.name.toLowerCase()].toUpperCase()
        : a[filterSortBy.name.toLowerCase()]
    const nameB =
      filterSortBy.name !== 'Rate'
        ? b[filterSortBy.name.toLowerCase()].toUpperCase()
        : b[filterSortBy.name.toLowerCase()]

    let comparison = 0
    if (nameA > nameB) {
      comparison = 1
    } else if (nameA < nameB) {
      comparison = -1
    }

    return comparison
  }

  useEffect(() => {
    if (filterSortBy.id !== 0 && fighterListOriginal.length && filterByRate !== null) {
      const dataOrdered =
        filterActivated === 'All'
          ? fighterListOriginal.slice().sort(sortArray)
          : fighterList.slice().sort(sortArray)

      const dataOrderedAndFilteredByRate = dataOrdered.filter(
        fighter => fighter.rate === filterByRate
      )
      dispatch(fighterOrderedAction(dataOrderedAndFilteredByRate))
    } else if (filterSortBy.id !== 0 && filterByRate === null && fighterListOriginal.length) {
      const dataOrdered =
        filterActivated === 'All'
          ? fighterListOriginal.slice().sort(sortArray)
          : fighterList.slice().sort(sortArray)

      dispatch(fighterOrderedAction(dataOrdered))
    } else if (filterSortBy.id === 0 && filterByRate !== null && fighterListOriginal.length) {
      const dataOnlyFiltered =
        filterActivated === 'All'
          ? fighterListOriginal.filter(fighter => fighter.rate === filterByRate)
          : fighterList.filter(fighter => fighter.rate === filterByRate)
      dispatch(fighterOrderedAction(dataOnlyFiltered))
    }
  }, [filterSortBy, filterByRate])
}
export default useSortArray
