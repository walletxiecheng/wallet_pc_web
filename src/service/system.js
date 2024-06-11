// TODO 系统管理相关接口
import axiosDefine from '@/common/axiosSetting'

// 添加系统用户 管理员// 表单格式
export const addCharacter = (data, headers) => {
  return axiosDefine.put('/back/system/user/addSystemUser', data, headers)
}

// 修改系统用户信息(不包含手机号和密码)
export const alertSystemUser = (data) => {
  return axiosDefine.post('/back/system/user/alertSystemUser', data)
}

// 修改系统登录密码
export const alertSystemUserPassword = (data) => {
  return axiosDefine.post('/back/system/user/alertSystemUserPassword', data)
}

// 修改系统用户手机号
export const alertSystemUserPhoneNumber = (data) => {
  return axiosDefine.post('/back/system/user/alertSystemUserPhoneNumber', data)
}

// 删除系统用户信息
export const deleteSystemUser = (params) => {
  return axiosDefine.delete('/back/system/user/deleteSystemUser', params)
}

// 根据账号查询系统用户
export const getSystemUserByAccountNumber = (params) => {
  return axiosDefine.get(
    '/back/system/user/getSystemUserByAccountNumber',
    params
  )
}

// 获取系统用户列表信息
export const getSystemUserList = (params) => {
  return axiosDefine.get('/back/system/user/getSystemUserList', params)
}

// 搜索系统用户
export const searchSystemUser = (params) => {
  return axiosDefine.get('/back/system/user/searchSystemUser', params)
}
