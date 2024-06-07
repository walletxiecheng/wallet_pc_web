import React, { useEffect, useState } from 'react'
import { Divider, Form, Select, Table, Space, Input, Button } from 'antd'
import { getAllCharacterNameHandler } from './utils/role'
import { openModal } from '../SmsManager/components/Modal'
import { addKeyByTable } from '@/utils/handleData'
import AdminForm from './components/Form'
import style from './index.module.less'
import { columns, statusOptions } from './config'
import { showMsg } from '@/components/TKMessage'
import { getSystemUserList } from '@/service/system'
const { Search } = Input

export default function AdminSetting() {
  const [userList, setUserList] = useState()

  const [searchForm] = Form.useForm()
  const [form] = Form.useForm()
  // 搜索
  const search = async () => {
    const req = await searchForm.validateFields()
    searchForm.resetFields()
    // TODO：调用查询接口
  }

  // 进入页面渲染数据
  useEffect(() => {
    getSystemUserListHandler()
    getAllCharacterNameHandler()
  }, [])

  // 获取管理员列表
  const getSystemUserListHandler = async () => {
    const req = {
      page: 1,
      size: 10,
      status: 3
    }
    const { data } = await getSystemUserList(req)
    const res = data.data
    const t = addKeyByTable(res)
    setUserList(t)
  }

  // 编辑管理员
  const editAdministrator = (record) => {}

  // 添加管理员
  const addAdministrator = () => {
    openModal({
      title: '新增管理员',
      content: <AdminForm form={form} />,
      handleOk: async () => {
        const result = await form.validateFields()
        form.resetFields()

        console.log(result)
        // showMsg('添加成功')
        try {
          // TODO 调用新增管理员接口接口
        } catch (error) {
          showMsg(error, 'error')
        }
      }
    })
  }

  return (
    <div className={style.adminContainer}>
      <header>管理员设置</header>
      <Divider />
      <Form>
        <Space className={style.title}>
          <Space.Compact className={style.searchForm}>
            <Form.Item label="启用状态" name="status">
              <Select
                style={{ width: 100, marginRight: '20px' }}
                options={statusOptions}
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
      <Table columns={columns(editAdministrator)} dataSource={userList} />
    </div>
  )
}
