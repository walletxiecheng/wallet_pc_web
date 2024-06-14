import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import VerifyForm from '../components/verifyForm'
// 忘记密码
export const forgetPassword = () => {
  console.log('忘记密码')
  openModal({
    title: '忘记密码'
  })
}

// 绑定手机号
export const bindTelNumber = () => {
  console.log('绑定手机号')
  openModal({
    title: '绑定手机号'
  })
}

// 验证登录
export const verifyLogin = (values) => {
  console.log('验证登录', values)
  openModal({
    title: '验证登录',
    content: <VerifyForm />,
    handleOK: () => {}
  })
}

// 修改密码
export const editPassWord = () => {
  console.log('修改密码')
  openModal({
    title: '修改密码'
  })
}
