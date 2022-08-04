import { IFighter } from '../../../state/slices/fighters'
import { client } from '../../API'

const fighterService = {
  fightList: async (): Promise<IFighter[]> => {
    const response = await client.get('/fighters')

    return response.data
  },
  fightListFilterByUniverses: async (universe: string): Promise<IFighter[]> => {
    const response = await client.get(`/fighters?universe=${universe}`)

    return response.data
  }
}

export default fighterService
