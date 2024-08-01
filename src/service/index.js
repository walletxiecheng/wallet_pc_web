import axiosDefine from '@/common/axiosSetting'

// 获取服务器运行情况
export const getHealth = () => {
  return axiosDefine.get('/system/health')
}

// 获取系统链支持信息
export const getChains = () => {
  return axiosDefine.get('/system/support/chains')
}

// 发送验证码
export const registerVerifyCode = (data) => {
  return axiosDefine.post('/system/support/chains', data)
}

//注册
export const register = (data) => {
  return axiosDefine.post('/account/register', data)
}

// 登录
export const login = (data) => {
  return axiosDefine.post('/account/login', data)
}

// 注册
export const resetPassword = (data) => {
  return axiosDefine.post('/account/password/reset', data)
}

//验证商户信息
export const verifyAccountInfo = (id) => {
  return axiosDefine.put(`/account/${id}/verify`)
}

//绑定商户信息
export const bindAccountInfo = (data) => {
  return axiosDefine.post('/account/bind', data)
}

//修改商户信息
export const updateAccountInfo = (id) => {
  return axiosDefine.put(`account/bind/${id}`, data)
}

//上传个人认证信息/form表单格式
export const personAuthentication = (data, header) => {
  return axiosDefine.put('/account/authentication/personal', data, header)
}

//上传企业认证信息/form表单格式
export const enterpriseAuthentication = (data, header) => {
  return axiosDefine.put('/account/authentication/enterprise', data, header)
}

// 获取账户地址
export const getAccountAddress = (id) => {
  return axiosDefine.get(`/account/${id}/address`)
}

// 获取提款记录
export const getWithdrawRecord = (id, data) => {
  return axiosDefine.get(`/crypto/withdraw/record/${id}`, data)
}

// 获取收款记录
export const getReceiveRecord = (id, data) => {
  return axiosDefine.get(`/crypto/receive/record/${id}`, data)
}

// 获取加密交易
export const getCryptoTransactions = (id) => {
  return axiosDefine.get(`/crypto/transactions/${id}`)
}

// 获取加密交易
export const getCryptoTokens = (data) => {
  return axiosDefine.get(`/crypto/tokens`, data)
}

// 存入加密货币
export const cryptoDeposit = (data) => {
  return axiosDefine.post('/crypto/deposit', data)
}

// 提取加密货币
export const cryptoWithdraw = (data) => {
  return axiosDefine.post('/crypto/withdraw', data)
}

// 转移加密货币
export const transfer = (data) => {
  return axiosDefine.post('/crypto/transfer', data)
}

// 获取api密钥
export const getAccountKeys = (id) => {
  return axiosDefine.get(`/account/${id}/keys`)
}

// 获取api密钥
export const createAccountKeys = (id) => {
  return axiosDefine.post(`/account/${id}/keys`)
}

// 获取账户整体信息
export const getAccountInfo = (data) => {
  return axiosDefine.get('/api/v1/account', data)
}

// 获取当前资产状况
export const getCurrentAssets = () => {
  return axiosDefine.get('/api/v1/assets/current')
}

// 获取资产流水
export const getFlowAssets = () => {
  return axiosDefine.get('/api/v1/assets/flow')
}

// 发送验证码
export const sendVerifyCode = (data) => {
  return axiosDefine.post('/account/verifyCode/send', data)
}

// 获取账户资产列表
export const getAccountAssets = (id, data) => {
  return axiosDefine.get(`/account/${id}/assets`, data)
}
