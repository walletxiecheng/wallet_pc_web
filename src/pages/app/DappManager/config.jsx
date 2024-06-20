import { Space, Button } from 'antd'
import style from './index.module.less'
import { useEffect, useState } from 'react'



export const columns = () => {
  // 查找类型名称
  const findName = (value) => {
    const label = typeOption.map((item) => {
      if (item.value == value) {
        return item.label
      }
    })
    return label
  }

  return [
    {
      key: 'id',
      title: 'DApp ID',
      dataIndex: 'id',
      width: '8%'
    },
    {
      key: 'icon',
      title: 'logo',
      dataIndex: 'icon',
      width: '6%',
      render: (_, record) => <img width={32} src={record.icon} />
    },
    {
      key: 'name',
      title: '名称',
      dataIndex: 'name',
      width: '8%'
    },
    {
      key: 'status',
      title: '状态',
      dataIndex: 'status',
      width: '8%',
      render: (_, record) => (
        <div>
          <span style={{ color: '#00851D' }}>
            {record.status === 2 ? '下架' : '上架'}
          </span>
        </div>
      )
    },
    {
      key: 'chain_id',
      title: '所属链',
      dataIndex: 'chain_id',
      width: '8%'
    },
    {
      key: 'type',
      title: '标签类型',
      dataIndex: 'type',
      width: '8%',
      render: (_, record) => (
        <div>
          <span>{findName(record.type)}</span>
        </div>
      )
    },
    {
      key: 'describe',
      title: '描述',
      dataIndex: 'describe',
      width: '20%',
      render: (_, record) => (
        <div className={style.table}>{record.describe}</div>
      )
    },
    {
      key: 'url',
      title: '链接',
      dataIndex: 'url',
      width: '20%',
      render: (_, record) => <div className={style.table}>{record.url}</div>
    },
    {
      key: 'operate',
      title: '操作',
      dataIndex: 'operate',
      render: (_, record) => (
        <Space>
          <Button type="link">编辑</Button>
          <Button
            style={{ color: record.status === 1 ? '#000000' : '#00851D' }}
            type="link"
          >
            {record.status === 1 ? '下架' : '上架'}
          </Button>
        </Space>
      )
    }
  ]
}

const TYPE_MENU = {
  NEW: 1,
  DEFI: 2,
  GAME: 3,
  BOURSE: 4,
  BROWSER: 5,
  TOOL: 6
}

export const typeOption = [
  {
    value: TYPE_MENU.NEW,
    label: '新品'
  },
  {
    value: TYPE_MENU.DEFI,
    label: 'DeFi'
  },
  {
    value: TYPE_MENU.GAME,
    label: '游戏'
  },

  {
    value: TYPE_MENU.BOURSE,
    label: '交易所'
  },
  {
    value: TYPE_MENU.BROWSER,
    label: '浏览器'
  },
  {
    value: TYPE_MENU.TOOL,
    label: '工具'
  }
]
