//法币管理
import axiosDefine from '@/common/axiosSetting'

// 获取法币信息列表
export const getLegalTenderList = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/tender/getLegalTenderList',
    params
  )
}

// 获取参考汇率地址信息
export const getReferenceRateAddress = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/tender/getReferenceRateAddress',
    params
  )
}

// 添加法币信息
export const addLegalTender = (data, headers) => {
  return axiosDefine.put(
    '/back/appPageManagement/tender/addLegalTender',
    data,
    headers
  )
}

// 更新法币信息
export const updateLegalTenderInfo = (params) => {
  return axiosDefine.post(
    '/back/appPageManagement/tender/updateLegalTenderInfo',
    params
  )
}
