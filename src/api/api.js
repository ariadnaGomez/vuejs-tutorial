import axios from 'axios'

export function getPosts () {
  return axios.get(`http://jsonplaceholder.typicode.com/posts`)
}
