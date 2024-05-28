//代币管理相关接口
import aioxsDefine from '@/common/axiosSetiting'

// 获取支持的代币信息
export const getSupportCoinList = (params) => {
  return aioxsDefine.get(
    '/back/appPageManagement/coins/getSupportChainList',
    params
  )
}

// 获取支持的链信息
export const getSupportChainList = (params) => {
  return aioxsDefine.get(
    '/back/appPageManagement/coins/getSupportChainList',
    params
  )
}

// 上传新的支持代币
export const uploadSupportCoin = (data) => {
  return aioxsDefine.post(
    '/back/appPageManagement/coins/uploadSupportCoin',
    data
  )
}

// 上传新的支持链信息——传入表单格式数据
export const uploadSupportChain = (data, headers) => {
  return aioxsDefine.post(
    '/back/appPageManagement/coins/uploadSupportChain',
    data,
    headers
  )
}

// 修改的支持链信息
export const updateSupportChain = (data) => {
  return aioxsDefine.put(
    '/back/appPageManagement/coins/updateSupportChain',
    data
  )
}

// 修改的支持代币信息
export const updateSupportCoinList = (data) => {
  return aioxsDefine.put(
    '/back/appPageManagement/coins/updateSupportCoinList',
    data
  )
}

// 删除支持的代币信息
export const deleteSupportCoin = (params) => {
  return aioxsDefine.delete(
    '/back/appPageManagement/coins/deleteSupportCoin',
    params
  )
}

// 删除支持的链信息
export const deleteSupportChain = (params) => {
  return aioxsDefine.delete(
    '/back/appPageManagement/coins/deleteSupportChain',
    params
  )
}
