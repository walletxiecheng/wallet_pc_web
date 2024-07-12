import axios from 'axios'
import { handleInterceptors } from './interceptors'
import { useTokenStore, useUserStore } from '@/stores'

export const axiosInstance = axios.create({
  baseURL: 'http://18.143.170.163:9996/',
  // baseURL: 'http://wallet_admin:9996',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-token': useTokenStore?.getState()?.token || null,
    'x-user-id': useUserStore?.getState()?.userInfo?.ID || 0
  }
})

handleInterceptors()
const axiossDefine = {
  // GET 请求
  get: (url, params = {}) => axiosInstance.get(url, { params }),

  // POST 请求
  post: (url, data = {}, headers = {}) =>
    axiosInstance.post(url, data, headers),

  // PUT 请求
  put: (url, data = {}, headers = {}) => axiosInstance.put(url, data, headers),

  // DELETE 请求
  delete: (url, data = {}) => axiosInstance.delete(url, { data })
}

export default axiossDefine
