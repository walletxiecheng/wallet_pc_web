//后台语言相关接口
import aioxsDefine from '@/common/axiosSetiting'

// 删除指定的语言
export const deleteLanguageMapInfo = (params) => {
  return aioxsDefine.delete(
    '/back/appPageManagement/language/deleteLanguageMapInfo',
    params
  )
}

// 获取语言列表
export const getLanguageInfoList = (params) => {
  return aioxsDefine.get(
    '/back/appPageManagement/language/getLanguageInfoList',
    params
  )
}

// 根据关键字搜索语言信息
export const searchLanguageMapInfo = (params) => {
  return aioxsDefine.get(
    '/back/appPageManagement/language/searchLanguageMapInfo',
    params
  )
}

// 更新各个语言和文字的对应关系
export const updateLanguageMap = (data, headers) => {
  return aioxsDefine.put(
    '/back/appPageManagement/language/updateLanguageMap',
    data,
    headers
  )
}

// 上传语言信息
export const uploadLanguageInfo = (data, headers) => {
  return aioxsDefine.post(
    '/back/appPageManagement/language/uploadLanguageInfo',
    data,
    headers
  )
}
