import { Button, Image } from 'antd'

export const advertColumns = (edit) => {
  return [
    {
      key: 'id',
      dataIndex: 'id',
      title: 'ID'
    },
    {
      key: 'title',
      dataIndex: 'title',
      title: '标题'
    },
    {
      key: 'publisher',
      dataIndex: 'publisher',
      title: '发布人'
    },
    {
      key: 'image',
      dataIndex: 'image',
      title: '插图',
      render: (_, record) => <Image height={40} src={record.image} />
    },
    {
      key: 'eff_time',
      dataIndex: 'eff_time',
      title: '生效时间'
    },
    {
      key: 'validity',
      dataIndex: 'validity',
      title: '有效期'
    },
    {
      key: 'priority',
      dataIndex: 'priority',
      title: '优先级'
    },
    {
      key: 'triggers',
      dataIndex: 'triggers',
      title: '生效次数'
    },
    {
      key: 'region',
      dataIndex: 'region',
      title: '投放区'
    },
    {
      key: 'ad_url',
      dataIndex: 'ad_url',
      title: '链接'
    },
    {
      key: 'operate',
      dataIndex: 'operate',
      title: '操作',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            edit(record)
          }}
        >
          编辑
        </Button>
      )
    }
  ]
}

// 优先级
export const priorityOptions = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '一级'
  },
  {
    value: 2,
    label: '二级'
  },
  {
    value: 3,
    label: '三级'
  },
  {
    value: 4,
    label: '四级'
  },
  {
    value: 5,
    label: '五级'
  }
]

export const regionOptions = [
  {
    value: 1,
    label: '首页'
  },
  {
    value: 2,
    label: '发现'
  },
  {
    value: 3,
    label: '行情'
  }
]
