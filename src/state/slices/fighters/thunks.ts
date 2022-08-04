import { createAsyncThunk } from '@reduxjs/toolkit'
import { filterActivatedAction, IS_ONBOARDING_COMPLETED } from '.'
import fighterService from '../../../config/services/fighters'
import universesService from '../../../config/services/universes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const fighterListThunk = createAsyncThunk('fighter/getList', async () => {
  try {
    const data = await fighterService.fightList()
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error, 'error fighterListThunk')
  }
})

export const universesListThunk = createAsyncThunk('fighter/universes', async () => {
  try {
    const data = await universesService.universesList()
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error, 'error universesListThunk')
  }
})

export const fightListFilterByUniversesListThunk = createAsyncThunk(
  'fighter/fightListFilterByUniverses',
  async (universe: string, { dispatch }) => {
    try {
      const data = await fighterService.fightListFilterByUniverses(universe)
      dispatch(filterActivatedAction(universe))
      return data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error, 'error fightListFilterByUniversesListThunk')
    }
  }
)

export const initializeState = createAsyncThunk(
  'fighter/initialize',
  async function initializeUser() {
    try {
      const [isOnboardingCompleted] = await Promise.all([
        AsyncStorage.getItem(IS_ONBOARDING_COMPLETED)
      ])
      return {
        isOnboardingCompleted: isOnboardingCompleted ? JSON.parse(isOnboardingCompleted) : false
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error getting data')
    }
  }
)

export const saveOnboardingProcess = createAsyncThunk(
  'fighter/onboarding',
  async function onboardingProcess(payload: boolean) {
    AsyncStorage.setItem(IS_ONBOARDING_COMPLETED, JSON.stringify(payload))
    return payload
  }
)
