// 热门词管理相关接口
import axiosDefine from '@/common/axiosSetting'

// 将dapp移除热门
export const deleteHotDapp = (params) => {
  return axiosDefine.delete(
    '/back/appPageManagement/hotWords/deleteHotDapp',
    params
  )
}

// 获取dapp热门列表
export const getDappHotList = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/hotWords/getDappHotList',
    params
  )
}

// 设置dapp上热门的请求
export const setDappHot = (data, headers) => {
  return axiosDefine.put(
    '/back/appPageManagement/hotWords/setDappHot',
    data,
    headers
  )
}
