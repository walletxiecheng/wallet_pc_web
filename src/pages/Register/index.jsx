import RegisterForm from './components/RegisterForm'
import Verify from './components/Verify'
import style from './index.module.less'
import { useState } from 'react'

export default function Register() {
  const [currentStatus, setCurrentStatus] = useState(1)
  const toggleCurrentStatus = (status) => {
    setCurrentStatus(status)
  }

  return (
    <div className={style.registerContainer}>
      {currentStatus === 1 && (
        <RegisterForm toggleCurrentStatus={toggleCurrentStatus} />
      )}
      <Verify />
    </div>
  )
}
