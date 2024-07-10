// 活动管理
import axiossDefine from '@/common/axiosSetting'

// 获取手续费返现历史记录
export const getChargeReturnCashHistoryRecord = (params) => {
  return axiossDefine.get(
    '/back/activity/getChargeReturnCashHistoryRecord',
    params
  )
}

// 获取手续费返现列表
export const getChargeReturnCashList = (params) => {
  return axiossDefine.get('/back/activity/getChargeReturnCashList', params)
}

// 获取补偿规则
export const getCompensationRule = (params) => {
  return axiossDefine.get('/back/activity/getCompensationRule', params)
}

// 获取总返现手续费
export const getTotalCompensationAmount = (params) => {
  return axiossDefine.get('/back/activity/getTotalCompensationAmount', params)
}

// 更新补偿规则
export const updateCompensationRule = (data) => {
  return axiossDefine.get('/back/activity/updateCompensationRule', data)
}
