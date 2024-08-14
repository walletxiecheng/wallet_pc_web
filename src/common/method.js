// 邮箱验证切换焦点
export const toggleFocus = (inputRefs, e, index) => {
  if (e.keyCode === 8 && inputRefs.current[index - 1]) {
    return inputRefs.current[index - 1].focus()
  } else if (e.keyCode !== 8 && inputRefs.current[index + 1]) {
    return inputRefs.current[index + 1].focus()
  }
}

// 计算输入框内容
export const codeComputed = (inputRefs) => {
  const goggleCode = []
  inputRefs.current.map((item, index) => {
    goggleCode[index] = item.value
  })
  return goggleCode.join('')
}

// 时间戳转年月日时分秒
export const timesTampDate = (time) => {
  const date = new Date(time * 1000)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  return formattedDateTime
}

export const timerReload = () => {
  return setTimeout(() => {
    window.location.reload()
  }, 1000)
}

// 数组分组
export const groupArr = (arr, len) => {
  const res = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (temp.length === len) {
      res.push(temp)
      temp = []
    }
    temp.push(arr[i])
  }
  if (temp.length > 0) {
    res.push(temp)
  }

  return res
}
