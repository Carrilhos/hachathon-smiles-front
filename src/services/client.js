import axios from 'axios'

const client = axios.create({
  baseURL: 'https://hackton-level.herokuapp.com/'
})

export default client;