import { useTokenStore } from '@/stores'

// 请求头
export const getFormdataReq = () => {
  return {
    Authorization: 'Bearer ' + useTokenStore?.getState()?.token || null,
    'Content-Type': 'multipart/form-data'
  }
}

// 分页请求参数
export const pageParams = { current: 1, pageSize: 6 }
