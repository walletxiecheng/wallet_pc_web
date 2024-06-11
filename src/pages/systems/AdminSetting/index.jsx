import React from 'react'
import { Divider, Form, Select, Table, Space, Input, Button } from 'antd'
import { openModal } from '../SmsManager/components/Modal'
import AdminForm from './components/Form'
import style from './index.module.less'
import { STATUS_ENUM, columns, statusOptions } from './config'
import { showMsg } from '@/components/TKMessage'
import { getSystemUserList } from '@/service/system'
import { usePagination } from 'ahooks'

const { Search } = Input
const TOTAL = 3
const PAGE_SIZE = 1

export default function AdminSetting() {
  const [form] = Form.useForm()

  // 搜索
  const search = async (values) => {
    console.log(values)
    // const req = await searchForm.validateFields()
    // searchForm.resetFields()
    // TODO：调用查询接口
  }

  const {
    data: userList,
    run: runUserList,
    total: userListTotal = TOTAL,
    loading: userListLoading,
    pagination: userPagination
  } = usePagination(
    async (params) => {
      const { data } = await getSystemUserList(params)

      if (data.code !== 0) {
        showMsg('请求出错', 'error')
        return []
      }

      return data?.data || []
    },

    {
      onError: () => {
        showMsg('请求出错', 'error')
      },
      defaultParams: [
        {
          page: 1,
          size: PAGE_SIZE,
          status: STATUS_ENUM.ALL
        }
      ]
    }
  )

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
      <Form onFinish={search}>
        <Space className={style.title}>
          <Space.Compact className={style.searchForm}>
            <Form.Item
              label="启用状态"
              name="status"
              initialValue={STATUS_ENUM.ALL}
            >
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
      <Table
        columns={columns(editAdministrator)}
        dataSource={userList}
        rowKey={(record) => record.ID}
        pagination={{
          total: userListTotal,
          current: 1,
          pageSize: PAGE_SIZE,
          onChange: userPagination.onChange
        }}
      />
    </div>
  )
}
