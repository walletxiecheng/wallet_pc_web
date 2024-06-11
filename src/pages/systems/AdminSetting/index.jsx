import React, { useEffect, useState } from 'react'
import { openModal } from '../SmsManager/components/Modal'
import AdminForm from './components/Form'
import EditForm from './components/EditForm'
import style from './index.module.less'
import { STATUS_ENUM, columns, statusOptions } from './config'
import { showError, showSuccess } from '@/components/TKMessage'
import { getSystemUserList } from '@/service/system'
import { usePagination } from 'ahooks'
import { getAllCharacterName } from '@/service/role'
import {
  addCharacter,
  alertSystemUser,
  deleteSystemUser
} from '@/service/system'
import { Divider, Form, Select, Table, Space, Input, Button } from 'antd'

const { Search } = Input
export default function AdminSetting() {
  const [form] = Form.useForm()
  const [editForm] = Form.useForm()
  const [roleList, setRoleList] = useState([])
  // 搜索
  const search = async (values) => {
    console.log(values)
  }

  const {
    data: userList,
    run: runUserList,
    total: userListTotal,
    loading: userListLoading,
    pagination: userPagination
  } = usePagination(
    async (params) => {
      const res = await getSystemUserList(params)
      const { data } = res
      if (res.code !== 0) {
        showError('请求数据失败，请重试。')
        return []
      }
      return data.system_user_info_list
    },
    {
      onError: () => {
        showMsg('请求出错', 'error')
      },
      defaultParams: [
        {
          current: 1,
          pageSize: 10,
          status: STATUS_ENUM.ALL
        }
      ]
    }
  )

  // 编辑管理员
  const editAdministrator = (record) => {
    // 设置表单值为：record回显编辑
    setTimeout(() => {
      editForm.resetFields()
      editForm.setFieldsValue(record)
    }, 64)
    openModal({
      title: '编辑管理员',
      okText: '保存',
      content: <EditForm form={editForm} roleList={roleList} />,
      handleOk: async () => {
        const result = await editForm.validateFields()
        result.ID = record.ID
        try {
          const res = await alertSystemUser(result)
          if (res.code !== 0) {
            return showError('修改失败，请重试！')
          }
          // 刷新
          runUserList({
            current: 1,
            pageSize: 10,
            status: STATUS_ENUM.ALL
          })
          return showSuccess('修改成功！')
        } catch (error) {
          showError(error)
          return Promise.reject()
        }
      }
    })
  }

  // 添加管理员
  const addAdministrator = () => {
    openModal({
      title: '新增管理员',
      content: <AdminForm form={form} roleList={roleList} />,
      handleOk: async () => {
        const result = await form.validateFields()
        form.resetFields()
        try {
          const header = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          // TODO 调用新增管理员接口接口
          const res = await addCharacter(result, header)
          if (res.code !== 0) return showError('新增失败，请检查数据格式')
          // 刷新
          runUserList({
            current: 1,
            pageSize: 10,
            status: STATUS_ENUM.ALL
          })
          return showSuccess('新增管理员成功')
        } catch (error) {
          showError(error)
          return Promise.reject()
        }
      }
    })
  }

  // 获取角色列表
  const getAllCharacterNameHandler = async () => {
    const res = await getAllCharacterName()
    if (res.code !== 0) {
      return showError('请求角色列表失败')
    }
    const data = res.data
    const options = data.map((item) => {
      return {
        value: item.id,
        label: item.character_name
      }
    })
    setRoleList(options)
  }

  const openAdminHandler = async (record) => {
    const res = await alertSystemUser({
      enable: STATUS_ENUM.ENABLE,
      id: record.ID
    })
    if (res.code !== 0) {
      return showError('启用失败')
    }
    runUserList({
      current: 1,
      pageSize: 10,
      status: STATUS_ENUM.ALL
    })
    return showSuccess('启用成功')
  }
  // 禁用管理员
  const disableAdminHandler = async (record) => {
    const res = await alertSystemUser({
      id: record.ID,
      enable: STATUS_ENUM.DISABLE
    })
    if (res.code !== 0) {
      return showError('禁用失败')
    }
    runUserList({
      current: 1,
      pageSize: 10,
      status: STATUS_ENUM.ALL
    })
    return showSuccess('禁用成功')
  }
  // 删除管理员
  const deleteAdminHandler = async (record) => {
    const res = await deleteSystemUser({ id: record.ID })
    if (res.code !== 0) {
      return showError('删除失败,请检查网络状态')
    }
    runUserList({
      current: 1,
      pageSize: 10,
      status: STATUS_ENUM.ALL
    })
    return showSuccess('删除成功')
  }

  useEffect(() => {
    getAllCharacterNameHandler()
  }, [])

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
        columns={columns(
          editAdministrator,
          openAdminHandler,
          disableAdminHandler,
          deleteAdminHandler
        )}
        dataSource={userList}
        rowKey={(record) => record.ID}
        pagination={{
          current: usePagination.current,
          pageSize: usePagination.pageSize
        }}
      />
    </div>
  )
}
