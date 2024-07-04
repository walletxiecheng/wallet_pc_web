import React from 'react'
import { Button } from 'antd'
export default function TKButton() {
  return (
    <Button
      type="link"
      htmlType="reset"
      style={{ border: '1px solid #3f78f9' }}
    >
      重置
    </Button>
  )
}
