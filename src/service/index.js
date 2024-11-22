import axiosDefine from '@/common/axiosSetting'

// 获取服务器运行情况
export const getHealth = () => {
  return axiosDefine.get('/system/health')
}

// 获取系统链支持信息
export const getChains = () => {
  return axiosDefine.get('/system/support/chains')
}

// 获取系统token
export const getToken = (data) => {
  return axiosDefine.get('/system/support/token', data)
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

//退出登录
export const loginOut = (data) => {
  return axiosDefine.post('/account/logout', data)
}
// 注册
export const resetPassword = (data) => {
  return axiosDefine.post('/account/password/reset', data)
}

//验证商户信息
export const verifyAccountInfo = (data) => {
  return axiosDefine.put('/account/verify', data)
}

//绑定商户信息
export const bindAccountInfo = (data) => {
  return axiosDefine.post('/account/bind', data)
}

//修改商户信息
export const updateAccountInfo = (data) => {
  return axiosDefine.put('account/bind/', data)
}

//上传个人认证信息/form表单格式
export const personAuthentication = (data, header) => {
  return axiosDefine.post('/account/authentication/personal', data, header)
}

//上传企业认证信息/form表单格式
export const enterpriseAuthentication = (data, header) => {
  return axiosDefine.post('/account/authentication/enterprise', data, header)
}

// 获取账户地址
export const getAccountAddress = () => {
  return axiosDefine.get('/account/address')
}

// 获取提款记录
export const getWithdrawRecord = (data) => {
  return axiosDefine.get('/crypto/withdraw/record', data)
}

// 获取收款记录
export const getReceiveRecord = (data) => {
  return axiosDefine.get('/crypto/receive/record', data)
}

// 获取加密交易
export const getCryptoTransactions = () => {
  return axiosDefine.get('/crypto/transactions')
}

// 获取加密交易
export const getCryptoTokens = (data) => {
  return axiosDefine.get('/crypto/tokens', data)
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
export const getAccountKeys = (data) => {
  return axiosDefine.get('/account/keys', data)
}

// 获取API密钥记录
export const getAccountKeyRecord = (data) => {
  return axiosDefine.get('/account/keys/records', data)
}

// 创建api密钥
export const createAccountKeys = (data) => {
  return axiosDefine.post('/account/keys', data)
}

// 更新api密钥
export const updateAccountKeys = (data) => {
  return axiosDefine.put('/account/keys', data)
}

// 获取账户整体信息
export const getAccountInfo = (data) => {
  return axiosDefine.get('/api/v1/account', data)
}

// 获取当前资产状况
export const getCurrentAssets = () => {
  return axiosDefine.get('/api/v1/assets/current')
}
// 设置资金密码
export const setAssetsPassword = (data) => {
  return axiosDefine.post('/account/fund/password/set', data)
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
export const getAccountAssets = (data) => {
  return axiosDefine.get('/account/assets', data)
}

// 获取谷歌密钥
export const getGoogleAuth = () => {
  return axiosDefine.get('/account/google-auth/secret')
}

//  绑定谷歌验证器
export const bindGoogleAuth = (data) => {
  return axiosDefine.post('/account/google-auth/bind', data)
}

//  获取APIKey的权限映射表
export const getKeysPermissions = () => {
  return axiosDefine.get('/system/keys/permissions')
}

// 获取历史提币地址信息
export const getWithDrawHistoryAddr = (data) => {
  return axiosDefine.get('/crypto/withdraw/history/address', data)
}

// 获取地址余额接口
export const getWithDrawBalance = (data) => {
  return axiosDefine.post('/crypto/withdraw/balance', data)
}

// 获取市场详情接口
export const getMarket = (data) => {
  return axiosDefine.get('/home/market', data)
}

// 获取投资组合信息
export const getPortfolio = (data) => {
  return axiosDefine.get('/home/investment/portfolio', data)
}

// 获取投资组合信息
export const getAdvertisement = (data) => {
  return axiosDefine.get('/home/advertisement', data)
}

// 校验地址是否正确
export const verifyAddress = (data) => {
  return axiosDefine.put('/crypto/token/address/verify', data)
}

// 收藏代币
export const favoriteCoin = (data) => {
  return axiosDefine.post('/home/coin/favorite', data)
}

// 获取代币对USDT和美元对法币的汇率信息
export const getRate = (data) => {
  return axiosDefine.get('/market/rate', data)
}

// 统计用户量、成交量、优质数字资产量的接口
export const getStatistics = (data) => {
  return axiosDefine.get('/home/statistics', data)
}

// 设置是否开启IP白名单
export const settingWhiteIP = (data) => {
  return axiosDefine.post('/account/login/whiteIP/setting', data)
}

// 添加IP白名单
export const addWhiteIp = (data) => {
  return axiosDefine.post('/account/login/white/ip', data)
}
// 获取IP白名单
export const getWhiteIp = (data) => {
  return axiosDefine.get('/account/login/white/ip', data)
}

// 获取api访问密钥内容
export const getAccessKeys = (data) => {
  return axiosDefine.get('/account/keys/content', data)
}
