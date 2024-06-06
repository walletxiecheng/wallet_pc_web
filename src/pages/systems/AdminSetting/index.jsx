import React from 'react'
import { Divider, Form, Select, Table, Space, Input, Button } from 'antd'
import { openModal } from '../SmsManager/components/Modal'
import AdminForm from './components/Form'
import style from './index.module.less'
import { columns } from './config'
const { Search } = Input

const dataSource = [
  {
    key: 1,
    id: 1,
    account: '1234',
    name: '张三',
    department: '技术部门',
    post: '技术',
    role: '普通',
    tel: '13388992188',
    status: '禁用'
  },
  {
    key: 2,
    id: 2,
    account: '323',
    name: '李四',
    department: '技术部门',
    post: '技术',
    role: '中级',
    tel: '13388992188',
    status: '禁用'
  }
]

const options = [
  {
    value: '1',
    label: '所有状态'
  },
  {
    value: '2',
    label: '禁用'
  },
  {
    value: '3',
    label: '启用'
  }
]
export default function AdminSetting() {
  const [searchForm] = Form.useForm()
  const [addForm] = Form.useForm()
  // 搜索
  const search = async () => {
    const req = await searchForm.validateFields()
    console.log(req)
    // TODO：调用查询接口
  }
  const addAdministrator = () => {
    openModal({
      title: '新建管理员',
      content: <AdminForm />
    })
  }

  return (
    <div className={style.adminContainer}>
      <header>管理员设置</header>
      <Divider />
      <Form form={searchForm} initialValues={searchForm}>
        <Space className={style.title}>
          <Space.Compact className={style.searchForm}>
            <Form.Item label="启用状态" name="status">
              <Select
                style={{ width: 100, marginRight: '20px' }}
                options={options}
              ></Select>
            </Form.Item>
            <Form.Item label="管理员账号" name="account">
              <Search
                placeholder="请输入管理员账号"
                onSearch={search}
                enterButton="Search"
              />
            </Form.Item>
          </Space.Compact>

          <Space.Compact>
            <Button type="primary" onClick={addAdministrator}>
              + 新建
            </Button>
          </Space.Compact>
        </Space>
      </Form>
      <Table columns={columns()} dataSource={dataSource} />
    </div>
  )
}
