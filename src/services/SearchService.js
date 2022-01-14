import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:3000/v2/',                       // local
  baseURL: 'https://arena-api-staging-os.herokuapp.com/v2',  // staging
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
  all(term, page) {
    return apiClient.get(`search?q=${prepare(term)}&page=${page}`)
  },

  // object_type: blocks|channels|users
  others(object_type, term, page) {
    console.log(`search/${object_type}?q=${prepare(term)}`);
    return apiClient.get(`search/${object_type}?q=${prepare(term)}&page=${page}`)
  },

  explore(data) {
    console.log(data);
    return apiClient.get('search/explore', {
      params: data
    })
  }
}

function prepare(term) {
  return term ? term.trim() : ''
}
