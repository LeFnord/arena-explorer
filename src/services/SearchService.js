import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:3000/v2',
  // baseURL: 'https://staging-os.are.na/api/v2',
  baseURL: 'https://api.are.na/v2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  proxy: false,
  keepAlive: true
})

export default {
  all(term) {
    return apiClient.get(`search?q=${term}`)
  },

  // object_type: channels|blocks
  others(object_type, term) {
    console.log(`search/${object_type}?q=${term}`);
    return apiClient.get(`search/${object_type}?q=${term}`)
  },

  users(term) {
    return apiClient.get(`search/users?q=${term}`)
  },

  explore(term) {
    return apiClient.get(`search/explore?q=${term}`)
  }
}
