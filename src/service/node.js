// 节点配置
import axiosDefine from '@/common/axiosSetiting'

// 删除节点配置信息
export const deleteNodeConfig = (params) => {
  return axiosDefine.delete(
    '/back/appPageManagement/node/deleteNodeConfig',
    params
  )
}

// 获取节点配置信息
export const getNodeConfigList = (params) => {
  return axiosDefine.get(
    '/back/appPageManagement/node/getNodeConfigList',
    params
  )
}

// 更新/添加节点信息
export const updateOrAddNodeConfig = (data, headers) => {
  return axiosDefine.put(
    '/back/appPageManagement/node/updateOrAddNodeConfig',
    data,
    headers
  )
}