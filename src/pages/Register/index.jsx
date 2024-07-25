import RegisterForm from './components/RegisterForm'
import Verify from './components/Verify'
import style from './index.module.less'
import Password from './components/Password'
import { useState } from 'react'

export default function Register() {
  // 当前组件状态 1登录表单，2
  const [currentStatus, setCurrentStatus] = useState(1)
  // 注册方式-默认邮箱注册
  const [way, setWay] = useState(1)
  // 修改当前组件状态
  const toggleCurrentStatus = (status, way) => {
    setCurrentStatus(status)
    setWay(way)
  }

  return (
    <div className={style.registerContainer}>
      {currentStatus === 1 && (
        <RegisterForm toggleCurrentStatus={toggleCurrentStatus} />
      )}
      {currentStatus === 2 && (
        <Verify toggleCurrentStatus={toggleCurrentStatus} />
      )}
      {currentStatus === 3 && (
        <Password toggleCurrentStatus={toggleCurrentStatus} />
      )}
    </div>
  )
}
