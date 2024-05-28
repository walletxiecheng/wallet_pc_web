// apiService.js
import axios from 'axios'
// import { BASE_URL } from '../config'
const axiosInstance = axios.create({
  baseURL: 'http://18.143.170.163:9996',
  // baseURL: window.location.href,
  timeout: 10000, // 设置超时时间，单位为毫秒
  headers: {
    'Content-Type': 'application/json' // 设置默认请求头
  }
})

const HTTP = {
  // GET 请求
  get: (url, params = {}) => axiosInstance.get(url, { params }),

  // POST 请求
  post: (url, data = {}) => axiosInstance.post(url, data),

  // PUT 请求
  put: (url, data = {}) => axiosInstance.put(url, data),

  // DELETE 请求
  delete: (url, params = {}) => axiosInstance.delete(url, { params })
}

export default HTTP
