// 校验密码
export const validatePassword = (password) => {
  const regex =
    /^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)(?![!#$%^&*]+$)[\da-zA-z!_@^#$%^&*]{8,16}$/

  return regex.test(password)
}

// 校验邮箱
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// 校验手机号
export const validatePhone = (phone) => {
  const regex = /^\d{10,15}$/
  return regex.test(phone)
}
