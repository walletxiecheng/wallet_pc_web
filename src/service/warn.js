//  报警管理相关接口
import axiosDefine from '@/common/axiosSetting'

//获取系统报警列表
export const getWarningList = (params) => {
  return axiosDefine.get('/back/system/warningManager/getWarningList', params)
}

//获取系统报警信息详情
export const getWarningDetail = (params) => {
  return axiosDefine.get('/back/system/warningManager/getWarningDetail', params)
}

//报告报警信息 （客户端调用，收集报警信息，不进行响应。）
export const reportWarningInfo = (params) => {
  return axiosDefine.put('/warning/x/reportWarningInfo', params)
}

//  报警设置相关接口

// 获取报警设置信息列表
export const getWarningSettings = (params) => {
  return axiosDefine.get(
    '/back/system/warningSetting/getWarningSettings',
    params
  )
}

// 新增报警通知人员
export const newNotifyMember = (data, headers) => {
  return axiosDefine.put(
    '/back/system/warningSetting/newNotifyMember',
    data,
    headers
  )
}

// 修改报警通知人员信息
export const updateNotifyMember = (data) => {
  return axiosDefine.post(
    '/back/system/warningSetting/updateNotifyMember',
    data
  )
}

// 删除报警通知人员信息
export const deleteNotifyMember = (params) => {
  return axiosDefine.delete(
    '/back/system/warningSetting/deleteNotifyMember',
    params
  )
}

//获取报警规则信息列表
export const getRules = (params) => {
  return axiosDefine.get('/grafana/alert/rules', params)
}
