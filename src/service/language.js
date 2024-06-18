//后台语言相关接口
import axiosDefine from '@/common/axiosSetting'

// 删除指定的语言
export const deleteLanguageMapInfo = (params) => {
  return axiosDefine.delete(
    '/back/appPageManagement/language/deleteLanguageMapInfo',
    params
  )
}

// 获取语言列表
export const getLanguageInfoList = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/language/getLanguageInfoList',
    params
  )
}

// 根据关键字搜索语言信息
export const searchLanguageMapInfo = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/language/searchLanguageMapInfo',
    params
  )
}

// 更新各个语言和文字的对应关系
export const updateLanguageMap = (data, headers) => {
  return axiosDefine.post(
    '/back/appPageManagement/language/updateLanguageMap',
    data,
    headers
  )
}

// 上传语言信息
export const uploadLanguageInfo = (data, headers) => {
  return axiosDefine.put(
    '/back/appPageManagement/language/uploadLanguageInfo',
    data,
    headers
  )
}
