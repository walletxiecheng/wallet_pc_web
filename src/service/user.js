// 用户管理相关接口

import axiosDefine from '@/common/axiosSetting'

// 获取用户列表
export const getUserList = (params) => {
  return axiosDefine.get('/back/systemManagement/user/getUserList', params)
}

// 获取用户绑定的地址
export const getUserBindAddressList = (params) => {
  return axiosDefine.get(
    '/back/systemManagement/user/getUserBindAddressList',
    params
  )
}

// 根据id查询用户信息
export const getUserById = (params) => {
  return axiosDefine.get('/back/systemManagement/user/getUserById', params)
}

// 删除用户绑定地址
export const deleteBindAddress = (params) => {
  return axiosDefine.delete(
    '/back/systemManagement/user/deleteBindAddress',
    params
  )
}

//根据用户名关键字搜索用户
export const searchUserByName = (params) => {
  return axiosDefine.get('/back/systemManagement/user/searchUserByName', params)
}

//更新用户信息
export const updateUserInfo = (data, headers) => {
  return axiosDefine.post(
    '/back/systemManagement/user/updateUserInfo',
    data,
    headers
  )
}
