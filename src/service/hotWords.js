// 热门词管理相关接口
import aioxsDefine from '@/common/axiosSetiting'

// 将dapp移除热门
export const deleteHotDapp = (params) => {
  return aioxsDefine.delete(
    '/back/appPageManagement/hotWords/deleteHotDapp',
    params
  )
}

// 获取dapp热门列表
export const getDappHotList = (params) => {
  return aioxsDefine.get(
    '/back/appPageManagement/hotWords/getDappHotList',
    params
  )
}

// 设置dapp上热门的请求
export const setDappHot = (data, headers) => {
  return aioxsDefine.put(
    '/back/appPageManagement/hotWords/setDappHot',
    data,
    headers
  )
}
