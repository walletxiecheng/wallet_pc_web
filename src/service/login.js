import axiosDefine from '@/common/axiosSetting'
// 登陆
export const login = (data) => {
  return axiosDefine.put('/back/system/login/login', data)
}
