// 邮箱验证切换焦点
export const toggleFocus = (inputRefs, e, index) => {
  if (e.keyCode === 8 && inputRefs.current[index - 1]) {
    return inputRefs.current[index - 1].focus()
  } else if (e.keyCode !== 8 && inputRefs.current[index + 1]) {
    return inputRefs.current[index + 1].focus()
  }
}
