import { showError, showMsg, showSuccess } from '@/components/TKMessage'
import { axiosInstance } from './axiosSetting'

// 请求拦截器
export const handleInterceptors = () => {
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
      if (code !== 0) {
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
}
