// 资讯/新闻相关
import axiosDefine from '@/common/axiosSetting'
// 删除新闻
export const deleteNews = (params) => {
  return axiosDefine.delete('/back/appPageManagement/news/deleteNews', params)
}

// 删除新闻图片
export const deleteNewsImage = (params) => {
  return axiosDefine.delete(
    '/back/appPageManagement/news/deleteNewsImage',
    params
  )
}

// 获取新闻列表
export const getNewsList = (params) => {
  return axiosDefine.get('/back/appPageManagement/news/getNewsList', params)
}

// 发布新闻
export const publishNews = (data, headers) => {
  return axiosDefine.put(
    '/back/appPageManagement/news/publishNews',
    data,
    headers
  )
}

// 修改新闻
export const updateNews = (data, headers) => {
  return axiosDefine.post(
    '/back/appPageManagement/news/updateNews',
    data,
    headers
  )
}
