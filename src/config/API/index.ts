import axios from 'axios'

export const API_BASE = 'https://593cdf8fb56f410011e7e7a9.mockapi.io'

export const client = axios.create({
  baseURL: `${API_BASE}`
})
