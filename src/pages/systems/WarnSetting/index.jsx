import React from 'react'
import { Tabs } from 'antd'
import WarnRuleTable from './components/WarnRuleTable'
export default function WarnSetting() {
  const items = [
    {
      key: '1',
      label: '崩溃报警'
    },
    {
      key: '2',
      label: '异常报警'
    }
  ]
  return (
    <div>
      <Tabs items={items}></Tabs>
      <WarnRuleTable />
    </div>
  )
}
