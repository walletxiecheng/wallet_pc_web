//  日志管理相关接口
import axiosDefine from '@/common/axiosSetting'

// 登录日志 根据登录结果返回类型的登录时间范围查询登录日志
export const getLoginLogList = (params) => {
  return axiosDefine.get('/back/system/log/getLoginLogList', params)
}

// 获取操作日志列表
export const getOperationRecordList = (params) => {
  return axiosDefine.get(
    '/back/system/operationRecord/getOperationRecordList',
    params
  )
}
