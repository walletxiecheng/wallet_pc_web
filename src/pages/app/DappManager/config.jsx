import { Space, Button, Popconfirm, Divider, Radio, Form } from 'antd'
import style from './index.module.less'
import { updatedDappStatus } from '@/service/dapp'
import { showError, showSuccess } from '@/components/TKMessage'

export const columns = (chainList, handleEditDapp, run) => {
  // 查找链
  const findChainList = (value) => {
    const label = chainList?.map((item) => {
      if (item?.value == value) {
        return item?.label || ''
      }
    })
    return label
  }

  // 查找类型名称
  const findName = (values) => {
    const value = values[0]
    const label = typeOption.map((item) => {
      if (item.value == value) {
        return item.label
      }
    })
    return label
  }

  // 更改状态
  const changeStatus = async (id, status) => {
    const req = {
      id: id,
      status: status.target.value
    }
    try {
      await updatedDappStatus(req)
      run({
        current: 1,
        pageSize: 10
      })
    } catch (err) {
      showError(err.msg)
    }
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
        <Button
          type="link"
          style={{ color: record.status === 1 ? '#00851D' : '#000000' }}
        >
          {record.status === 1 ? '上架' : '下架'}
        </Button>
      )
    },
    {
      key: 'chain_id',
      title: '所属链',
      dataIndex: 'chain_id',
      width: '8%',
      render: (_, record) => <span>{findChainList(record.chain_id)}</span>
    },
    {
      key: 'dapp_type',
      title: '标签类型',
      dataIndex: 'dapp_type',
      width: '8%',
      render: (_, record) => (
        <div>
          <span>{findName(record.dapp_type)}</span>
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
          <Button
            type="link"
            onClick={() => {
              handleEditDapp(record)
            }}
          >
            编辑
          </Button>
          <Popconfirm
            title="状态"
            showCancel={false}
            icon={null}
            okButtonProps={{ style: { display: 'none' } }}
            description={
              <div>
                <Divider />
                <Form>
                  <Form.Item
                    label="DApp状态"
                    name="status"
                    initialValue={record.status}
                  >
                    <Radio.Group
                      options={statusOption}
                      onChange={(status) => {
                        changeStatus(record.id, status)
                      }}
                    ></Radio.Group>
                  </Form.Item>
                </Form>
              </div>
            }
          >
            <Button type="link">修改状态</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]
}

// 标签
export const TYPE_MENU = {
  NEW: 1,
  DEFI: 2,
  GAME: 3,
  BOURSE: 4,
  BROWSER: 5,
  TOOL: 6
}

// 标签类型
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

export const STATUS_MENU = {
  ENABLE: 1,
  DISABLE: 2
}

export const statusOption = [
  {
    value: STATUS_MENU.ENABLE,
    label: '上架'
  },
  {
    value: STATUS_MENU.DISABLE,
    label: '下架'
  }
]
