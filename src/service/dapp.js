//后台dapp相关接口
import axiosDefine from '@/common/axiosSetiting'

// 删除dapp信息
export const deleteDapp = (params) => {
  return axiosDefine.delete('/back/appPageManagement/dapp/deleteDapp', params)
}

// 上传dapp信息
export const uploadDapp = (data, headers) => {
  return axiosDefine.delete(
    '/back/appPageManagement/dapp/upload',
    data,
    headers
  )
}

// 更新dapp信息
export const updateDapp = (data, headers) => {
  return axiosDefine.delete(
    '//back/appPageManagement/dapp/update',
    data,
    headers
  )
}

// 查询dapp信息
export const getDappList = (params) => {
  return axiosDefine.delete('/back/appPageManagement/dapp/getDappList', params)
}