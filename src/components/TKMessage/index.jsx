import { message } from 'antd'

// 成功提示
export const showMsg = (content, type) => {
  message.open({
    type: type,
    content: content
  })
}
