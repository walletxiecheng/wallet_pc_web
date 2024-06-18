import React, { useState } from 'react'
import { Tabs } from 'antd'
import WarnRuleTable from './components/WarnRuleTable'
const data = [
  {
    key: '1',
    id: 1,
    tel: '123',
    desc: '职务'
  },
  {
    key: '2',
    id: 2,
    tel: '123',
    desc: '职务'
  }
]
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
export default function WarnSetting() {
  // 数据源
  const [dataSource, setDataSource] = useState(data)
  // 新增通知
  const addPerson = (value) => {
    const res = dataSource
    res.push(value)
    setDataSource(res)
    console.log(dataSource)
  }
  return (
    <div>
      <Tabs items={items}></Tabs>
      <WarnRuleTable
        addPerson={addPerson}
        data={dataSource}
        title="所有版本报警规则"
      />
      <WarnRuleTable title="单个版本报警规则" />
      <WarnRuleTable title="单个 崩溃/异常 摘要报警规则" />
    </div>
  )
}
