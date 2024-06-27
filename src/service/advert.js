// 广告版
import axiossDefine from '@/common/axiosSetting'

// 获取广告列表信息
export const getAdvertisementList = (data) => {
  return axiossDefine.get(
    '/back/appPageManagement/advertisement/getAdvertisementList',
    data
  )
}

// 发布广告信息
export const publishAdvertisement = (data, headers) => {
  return axiossDefine.put(
    '/back/appPageManagement/advertisement/publishAdvertisement',
    data,
    headers
  )
}

// 更新广告列表信息
export const updateAdvertisement = (data, headers) => {
  return axiossDefine.post(
    '/back/appPageManagement/advertisement/updateAdvertisement',
    data,
    headers
  )
}
