import { IUniversesList } from '../../../state/slices/fighters'
import { client } from '../../API'

const universesService = {
  universesList: async (): Promise<IUniversesList[]> => {
    const response = await client.get('/universes')

    return response.data
  }
}

export default universesService
