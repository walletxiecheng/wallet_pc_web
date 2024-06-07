// TODO 角色管理相关接口
import axiosDefine from '@/common/axiosSetting'

// 添加角色请求
export const addCharacter = (data) => {
  return axiosDefine.post('/back/system/character/addCharacter', data)
}

// 删除角色
export const deleteCharacter = (params) => {
  return axiosDefine.post('/back/system/character/deleteCharacter', params)
}

// 获取全部权限
export const getAllAuthority = (params) => {
  return axiosDefine.get('/back/system/character/getAllAuthority', params)
}

// 获取全部角色信息
export const getAllCharacterName = (params) => {
  return axiosDefine.get('/back/system/character/getAllCharacterName', params)
}

// 获取角色列表信息（包含权限信息）
export const getCharacterList = (params) => {
  return axiosDefine.get('/back/system/character/getCharacterList', params)
}

// 更新角色权限
export const updateCharacterAuthority = (data) => {
  return axiosDefine.post(
    '/back/system/character/updateCharacterAuthority',
    data
  )
}
