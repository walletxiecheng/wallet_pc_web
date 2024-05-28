// apiService.js
import axios from 'axios'
// import { BASE_URL } from '../config'
const axiosInstance = axios.create({
  baseURL: 'http://18.143.170.163:9996',
  // baseURL: window.location.href,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const aioxsDefine = {
  // GET 请求
  get: (url, params = {}, headers) => axiosInstance.get(url, { params }),

  // POST 请求
  post: (url, data = {}, headers) => axiosInstance.post(url, data, headers),

  // PUT 请求
  put: (url, data = {}) => axiosInstance.put(url, data),

  // DELETE 请求
  delete: (url, data = {}) => axiosInstance.delete(url, { data })
}

export default aioxsDefine
