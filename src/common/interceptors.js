import { showError, showWarning } from './message'
import { useTokenStore, useUserStore } from '@/stores'
import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: '/api',
  baseURL: ' http://token13.net:8888',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + useTokenStore?.getState()?.token || null
  }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const { data } = response
    const code = data.code
    if (code === 28) {
      showWarning('身份验证已过期，请重新登录。')
      // return (window.location.pathname = 'login')
    } else if (code !== 0) {
      return Promise.reject(data)
    }

    return data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    showError('请求出错，请重试。')
    return Promise.reject(error)
  }
)

export default axiosInstance
