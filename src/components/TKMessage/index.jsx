import { message } from 'antd'

// 成功提示
export const showSuccess = (content) => {
  message.open({
    type: 'success',
    content: content
  })
}

// 失败
export const showError = (content) => {
  message.open({
    type: 'error',
    content: content
  })
}

// 警告
export const showWarning = (content) => {
  message.open({
    type: 'warning',
    content: content
  })
}

// 普通提示
export const showMsg = (content) => {
  message.open({
    content: content
  })
}
