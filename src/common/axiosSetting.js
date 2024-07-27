import axiosInstance from './interceptors'

const axiosDefine = {
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

export default 
axiosDefine