import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/v2/',                       // local
  // baseURL: 'https://arena-api-staging-os.herokuapp.com/v2',  // staging
  // baseURL: 'https://api.are.na/v2',                          // production
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: false,
  proxy: false,
  keepAlive: true
})

export default {
  all(term) {
    return apiClient.get(`search?q=${prepare(term)}`)
  },

  // object_type: channels|blocks
  others(object_type, term) {
    console.log(`search/${object_type}?q=${prepare(term)}`);
    return apiClient.get(`search/${object_type}?q=${prepare(term)}`)
  },

  users(term) {
    return apiClient.get(`search/users?q=${prepare(term)}`)
  },

  explore(term) {
    return apiClient.get(`search/explore?q=${prepare(term)}`)
  }
}

function prepare(term) {
  return term ? term.trim() : ''
}
