import { Divider, Form } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function HandleRule() {
  const ruleData = useLocation()?.state
  const type = useLocation()?.state?.type
  return (
    <div>
      <header>
        <h3>{type === 1 ? '新增' : '编辑'}</h3>
      </header>
      <Divider />
      <div className="dataBox">
        <Form></Form>
      </div>
    </div>
  )
}
