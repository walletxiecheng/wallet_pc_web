import axiosInstance from './interceptors'
import { useTokenStore } from '@/stores'

export const getDefaultHeader = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + useTokenStore?.getState()?.token || null
  }
}
const axiosDefine = {
  // GET 请求
  get: (url, params = {}, headers = getDefaultHeader()) =>
    axiosInstance.get(url, { params, headers }),

  // POST 请求
  post: (url, data = {}, headers = getDefaultHeader()) =>
    axiosInstance.post(url, data, { headers }),

  // PUT 请求
  put: (url, data = {}, headers = getDefaultHeader()) =>
    axiosInstance.put(url, data, { headers }),

  // DELETE 请求
  delete: (url, data = {}, headers = getDefaultHeader()) =>
    axiosInstance.delete(url, { data, headers })
}

export default axiosDefine
