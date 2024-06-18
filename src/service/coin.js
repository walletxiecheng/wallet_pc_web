//代币管理相关接口
import axiossDefine from '@/common/axiosSetting'

// 获取支持的代币信息
export const getSupportCoinList = (data) => {
  return axiossDefine.post(
    '/back/appPageManagement/coins/getSupportCoinList',
    data
  )
}

// 获取支持的链信息
export const getSupportChainList = (params) => {
  return axiossDefine.get(
    '/back/appPageManagement/coins/getSupportChainList',
    params
  )
}

// 上传新的支持代币
export const uploadSupportCoin = (data) => {
  return axiossDefine.post(
    '/back/appPageManagement/coins/uploadSupportCoin',
    data
  )
}

// 上传新的支持链信息——传入表单格式数据
export const uploadSupportChain = (data, headers) => {
  return axiossDefine.post(
    '/back/appPageManagement/coins/uploadSupportChain',
    data,
    headers
  )
}

// 修改的支持链信息
export const updateSupportChain = (data, headers) => {
  return axiossDefine.put(
    '/back/appPageManagement/coins/updateSupportChain',
    data,
    headers
  )
}

// 修改的支持代币信息
export const updateSupportCoinList = (data) => {
  return axiossDefine.put(
    '/back/appPageManagement/coins/updateSupportCoinList',
    data
  )
}

// 删除支持的代币信息
export const deleteSupportCoin = (params) => {
  return axiossDefine.delete(
    '/back/appPageManagement/coins/deleteSupportCoin',
    params
  )
}

// 删除支持的链信息
export const deleteSupportChain = (params) => {
  return axiossDefine.delete(
    '/back/appPageManagement/coins/deleteSupportChain',
    params
  )
}

//上传图片接口 1.代币图片，2.dapp图片，3.新闻图片，4.用户头像
export const uploadImage = (data, headers) => {
  return axiossDefine.put(
    '/back/appPageManagement/coins/uploadImage',
    data,
    headers
  )
}
