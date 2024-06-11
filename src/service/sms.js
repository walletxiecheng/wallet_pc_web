// 短信管理相关接口
import axiosDefine from '@/common/axiosSetting'
// 添加短信规则
export const addSmsRule = (data, headers) => {
  return axiosDefine.put('/back/system/sms/addSmsRule', data, headers)
}

// 编辑短信规则
export const alertSmsRule = (data) => {
  return axiosDefine.post('/back/system/sms/alertSmsRule', data)
}

// 获取短信模板列表
export const getSmsList = (data) => {
  return axiosDefine.get('/back/system/sms/getSmsList', data)
}

// 根据编号搜索短信规则信息
export const searchSmsBySerialNumber = (data) => {
  return axiosDefine.get('/back/system/sms/searchSmsBySerialNumber', data)
}
