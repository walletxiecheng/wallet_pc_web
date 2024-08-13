import RegisterForm from './components/RegisterForm'
import style from './index.module.less'

export default function Register() {
  return (
    <div className={style.registerContainer}>
      <RegisterForm />
    </div>
  )
}
