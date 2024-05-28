//代币管理相关接口
import HTTP from '@/common/axiosSetiting'

export const getCoinList = (params) => {
  return HTTP.get('/back/appPageManagement/coins/getSupportChainList', params)
}
