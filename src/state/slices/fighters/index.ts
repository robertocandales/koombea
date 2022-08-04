import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IData } from '../../../screens/FilterFighters/FilterFighters'
import {
  fighterListThunk,
  fightListFilterByUniversesListThunk,
  initializeState,
  saveOnboardingProcess,
  universesListThunk
} from './thunks'
export const IS_ONBOARDING_COMPLETED = '@isOnboardingCompleted'

export interface IUniversesList {
  objectID: string
  name: string
  description: string
}
export interface IFighter {
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
}
interface IInitialState {
  fighterList: IFighter[]
  fighterListOriginal: IFighter[]
  isLoadingFighterList: boolean
  isLoadingUniversesList: boolean
  universesList: IUniversesList[]
  filterActivated: string
  filterSortBy: IData
  filterByRate: number | null
  isOnboardingCompleted: boolean
}

const allObj = [
  {
    objectID: 'all',
    name: 'All',
    description: 'All'
  }
]

const initialState: IInitialState = {
  fighterList: [],
  fighterListOriginal: [],
  isLoadingFighterList: false,
  isLoadingUniversesList: false,
  universesList: [],
  filterActivated: 'All',
  filterSortBy: { id: 0, name: '', value: false },
  filterByRate: null,
  isOnboardingCompleted: false
}

const fighterSlice = createSlice({
  name: 'fighter',
  initialState,
  reducers: {
    filterActivatedAction: (state, action) => {
      state.filterActivated = action?.payload
    },
    filterSortByAction: (state, action) => {
      state.filterSortBy = action?.payload
    },
    filterByRateAction: (state, action) => {
      state.filterByRate = action?.payload
    },
    fighterOrderedAction: (state, action) => {
      state.fighterList = action?.payload
    }
  },

  extraReducers: builder => {
    builder
      .addCase(initializeState.fulfilled, (state, action: PayloadAction<any>) => {
        Object.assign(state, action.payload)
      })
      .addCase(saveOnboardingProcess.fulfilled, (state, action: PayloadAction<any>) => {
        state.isOnboardingCompleted = action.payload
      })

      .addCase(fighterListThunk.pending, state => {
        state.isLoadingFighterList = true
      })
      .addCase(fighterListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.fighterList = action.payload
        state.fighterListOriginal = action.payload
        state.isLoadingFighterList = false
      })
      .addCase(fighterListThunk.rejected, state => {
        state.isLoadingFighterList = false
      })
      .addCase(universesListThunk.pending, state => {
        state.isLoadingUniversesList = true
      })
      .addCase(universesListThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.universesList = [...allObj, ...action.payload]
        state.isLoadingUniversesList = false
        state.filterActivated = 'All'
      })
      .addCase(universesListThunk.rejected, state => {
        state.isLoadingUniversesList = false
      })
      .addCase(fightListFilterByUniversesListThunk.pending, state => {
        state.isLoadingFighterList = true
      })
      .addCase(
        fightListFilterByUniversesListThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.fighterList = action.payload
          state.isLoadingFighterList = false
        }
      )
      .addCase(fightListFilterByUniversesListThunk.rejected, state => {
        state.isLoadingFighterList = false
      })
  }
})

export const {
  filterActivatedAction,
  filterSortByAction,
  filterByRateAction,
  fighterOrderedAction
} = fighterSlice.actions
export default fighterSlice
