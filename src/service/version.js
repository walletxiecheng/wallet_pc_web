// 版本管理
import axiosDefine from '@/common/axiosSetiting'

//获取软件版本信息
export const getVersionInfo = (params) => {
  return axiosDefine.get(
    '/back/systemManagement/version/getVersionInfo',
    params
  )
}

//上传软件版本信息
export const uploadAppVersion = (data, headers) => {
  return axiosDefine.post(
    '/back/systemManagement/version/uploadAppVersion',
    data,
    headers
  )
}

// 修改app版本请求信息
export const updateAppVersion = (data, headers) => {
  return axiosDefine.post(
    '/back/systemManagement/version/updateAppVersion',
    data,
    headers
  )
}

//删除软件版本信息
export const deleteAppVersion = (params) => {
  return axiosDefine.delete(
    '/back/systemManagement/version/deleteAppVersion',
    params
  )
}
