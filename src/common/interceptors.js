import { showError, showMsg, showSuccess } from '@/components/TKMessage'
import { axiosInstance } from './axiosSetting'

// 请求拦截器
export const handleInterceptors = () => {
  axiosInstance.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么
      return config
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  axiosInstance.interceptors.response.use(
    function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      const { data } = response
      const code = data?.code || undefined
      // 根据不同的错误码做出提示
      switch (code) {
        case 0:
          showSuccess('请求成功')
          break
        case 1:
          showError('请求数据错误，稍后请重试。')
          break
        case 3:
          showError('参数校验错误')
          break
        case 4:
          showError('更新信息失败')
          break
        case 5:
          showError('添加数据失败')
          break
        case 6:
          showError('获取数据失败')
          break
        case 7:
          showError('删除数据失败')
          break
        case 8:
          // showError('保留')
          break
        case 9:
          showError('上传失败')
          break
        case 10:
          showError('格式错误')
          break
        case 11:
          showError('非法访问')
          break
        case 12:
          showError('授权过期，请重新登录。')
          break
        case 13:
          showError('监测到账号异地登陆，请重新登录。')
          break
        default:
          break
      }

      switch (code) {
        case 404:
          showSuccess('账号不存在')
          break
        case 405:
          showError('密码错误')
          break
        case 406:
          showError('账号信息查询失败')
          break
        case 407:
          showError('验证码错误')
          break
        case 408:
          showError('发送验证码失败')
          break
        case 409:
          showError('权限不存在')
          break
        case 410:
          showError('角色正在被使用，不能删除')
          break
        case 411:
          showError('配置项的类型错误')
          break
        case 412:
          showError('系统用户已存在')
          break
        case 413:
          showError('角色不存在')
          break
        case 414:
          showError('密码确认失败')
          break
        case 415:
          showError('修改密码失败')
          break
        case 416:
          showError('新旧密码相同')
          break
        case 417:
          showError('短信规则的编号已经存在')
          break
        case 418:
          showError('账号被禁用')
          break
        case 419:
          showError('报警通知人员已经存在')
          break
        default:
          break
      }
      return data
    },
    function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error)
    }
  )
}
