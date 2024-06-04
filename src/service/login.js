import axiosDefine from '@/common/axiosSetting'
// 登录
export const login = (data) => {
  return axiosDefine.put('/back/system/login/login', data)
}

// 预登录
export const preLogin = (params) => {
  return axiosDefine.get('/back/system/login/preLogin', params)
}

// 绑定手机号
export const bindPhoneNumber = (data) => {
  return axiosDefine.post('/back/system/login/bindPhoneNumber', data)
}

// 发送登录验证码
export const sendLoginVerificationCode = (data) => {
  return axiosDefine.post('/back/system/login/sendLoginVerificationCode', data)
}
