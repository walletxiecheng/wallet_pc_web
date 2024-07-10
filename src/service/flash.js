// 闪兑管理相关接口
import axiosDefine from '@/common/axiosSetting'

// 添加闪兑币种信息
export const addFlashCoinInfo = (data, headers) => {
  return axiosDefine.put('/back/flash/addFlashCoinInfo', data, headers)
}

// 获取闪兑币种信息列表
export const getFlashCoinInfo = (params) => {
  return axiosDefine.get('/back/flash/getFlashCoinInfo', params)
}

// 获取闪兑订单列表
export const getFlashOrderRecord = (params) => {
  return axiosDefine.get('/back/flash/getFlashOrderRecord', params)
}

// 修改闪兑币种信息
export const updateFlashCoinInfo = (data) => {
  return axiosDefine.post('/back/flash/updateFlashCoinInfo', data)
}
