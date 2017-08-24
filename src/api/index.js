import axios from 'axios'
import config from '../config/config'
// Add a request interceptor
const http = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
})
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
export default http
