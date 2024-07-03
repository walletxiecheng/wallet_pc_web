// 商户管理————账户管理
import axiossDefine from '@/common/axiosSetting'

// 创建商户账户
export const createCommercialAccount = (data, headers) => {
  return axiossDefine.put(
    '/back/commercialManager/account/createCommercialAccount',
    data,
    headers
  )
}

// 导出商户信息
export const exportCommercialInfo = (prams) => {
  return axiossDefine.get(
    '/back/commercialManager/account/exportCommercialInfo',
    prams
  )
}

// 获取商户详情信息
export const getCommercialAccountDetail = (prams) => {
  return axiossDefine.get(
    '/back/commercialManager/account/getCommercialAccountDetail',
    prams
  )
}

// 获取制定商户资产信息
export const getCommercialAccountAssets = (prams) => {
  return axiossDefine.get(
    '/back/commercialManager/account/getCommercialAccountAssets',
    prams
  )
}

// 获取制定商户交易记录
export const getCommercialTransactionRecord = (prams) => {
  return axiossDefine.get(
    '/back/commercialManager/account/getCommercialTransactionRecord',
    prams
  )
}

// 获取商户账户列表
export const getCommercialAccountList = (prams) => {
  return axiossDefine.get(
    '/back/commercialManager/account/getCommercialAccountList',
    prams
  )
}

// 锁仓
export const lockPosition = (data) => {
  return axiossDefine.put('/back/commercialManager/account/lockPosition', data)
}

// 充币
export const rechargeCoin = (data) => {
  return axiossDefine.post('/back/commercialManager/account/rechargeCoin', data)
}
// 重置资产账户地址
export const resetAssetAccountAddress = (data) => {
  return axiossDefine.post(
    '/back/commercialManager/account/resetAssetAccountAddress',
    data
  )
}

// 设置商户的用户资产状态
export const setAssetAccountStatus = (data) => {
  return axiossDefine.post(
    '/back/commercialManager/account/setAssetAccountStatus',
    data
  )
}

// 设置商户账户状态或权限
export const setCommercialAccountStatus = (data) => {
  return axiossDefine.post(
    '/back/commercialManager/account/setCommercialAccountStatus',
    data
  )
}

// 设置邀请人
export const setInvitor = (data) => {
  return axiossDefine.post('/back/commercialManager/account/setInvitor', data)
}

// 商户管理————实名管理
// 查看实名证件信息
export const getRealNameCertificateInfo = (data) => {
  return axiossDefine.post(
    '/back/commercialManager/realName/getRealNameCertificateInfo',
    data
  )
}

// 获取商户实名信息列表
export const getRealNameInfo = (data) => {
  return axiossDefine.post(
    '/back/commercialManager/realName/getRealNameInfo',
    data
  )
}
