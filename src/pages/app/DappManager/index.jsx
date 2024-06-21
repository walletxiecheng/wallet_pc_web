import React, { useEffect, useState } from 'react'
import {
  Divider,
  Form,
  Select,
  Input,
  Button,
  Space,
  DatePicker,
  Table
} from 'antd'
import { getSupportChainList } from '@/service/coin'
import { columns, typeOption, statusOption } from './config'
import { getDappList, uploadDapp } from '@/service/dapp'
import { usePagination } from 'ahooks'
import { showError, showSuccess } from '@/components/TKMessage'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import { header } from '@/common/config'
import UploadForm from './components/UploadForm'
import EditForm from './components/EditForm'

const PAGE_SIZE = 10
export default function DappManager() {
  // 链列表
  const [chainList, setChainList] = useState()
  const [modalForm] = Form.useForm()
  const [editForm] = Form.useForm()

  const [uploadImg, setUploadImg] = useState()
  // 获取dapp列表
  const { data, run, pagination } = usePagination(
    async (params) => {
      try {
        const { data } = await getDappList(params)
        return { total: data.total, list: data.dapp_list }
      } catch (err) {
        showError('获取dapp列表失败')
        return { total: 0, list: [] }
      }
    },
    {
      defaultParams: [{ pageSize: PAGE_SIZE, current: 1 }]
    }
  )
  // 编辑dapp
  const editDapp = () => {}
  // 获取链列表
  const getChanList = async () => {
    try {
      const { data } = await getSupportChainList({ current: 1, pageSize: 20 })
      const list = data.support_chains_info_list
      // 处理返回链数据
      const cList = list.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
      setChainList(cList)
    } catch (err) {
      showError('获取链列表失败')
    }
  }
  // 查询
  const onFinish = (values) => {
    if (values.date) {
      values.start_date = values?.date[0].format('YYYY-MM-DD')
      values.end_date = values?.date[1].format('YYYY-MM-DD')
    }
    values.date = undefined
    run({ pageSize: PAGE_SIZE, current: 1, ...values })
  }

  // 设置upload上传
  const upload = (val) => {
    setUploadImg(val)
  }

  // TODO 创建dapp
  const handleCreateDapp = () => {
    openModal({
      title: '创建',
      content: (
        <UploadForm form={modalForm} chainList={chainList} upload={upload} />
      ),
      width: 700,
      handleOk: async () => {
        const result = await modalForm.validateFields()

        result.dapp_type = result?.dapp_type.join()
        result.file = uploadImg
        try {
          await uploadDapp(result)
          run({ pageSize: PAGE_SIZE, current: 1 })
          return showSuccess('上传成功')
        } catch (err) {
          showError('上传失败')
          return Promise.reject()
        }
      }
    })
  }
  // TODO 编辑dapp
  const handleEditDapp = (record) => {
    console.log(record)
    editForm.setFieldsValue(record)
    openModal({
      title: '编辑',
      content: (
        <EditForm
          form={editForm}
          chainList={chainList}
          upload={upload}
          record={record}
        />
      ),
      width: 700,
      handleOk: async () => {
        const result = await modalForm.validateFields()

        result.dapp_type = result?.dapp_type.join()
        result.file = uploadImg
        try {
          await uploadDapp(result)
          run({ pageSize: PAGE_SIZE, current: 1 })
          return showSuccess('上传成功')
        } catch (err) {
          showError('上传失败')
          return Promise.reject()
        }
      }
    })
  }
  useEffect(() => {
    getChanList()
  }, [])

  return (
    <div>
      <header>
        <h3>DApp管理</h3>
      </header>
      <Divider />
      {/* 表单 */}
      <div>
        <Form onFinish={onFinish}>
          <Space>
            <Form.Item label="标签类型" name="dapp_type">
              <Select options={typeOption} placeholder="请选择"></Select>
            </Form.Item>
            <Form.Item label="所属链" name="chain_id">
              <Select options={chainList} placeholder="请选择"></Select>
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Select options={statusOption} placeholder="请选择"></Select>
            </Form.Item>
          </Space>
          <br />
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <Form.Item label="日期" name="date">
                <DatePicker.RangePicker />
              </Form.Item>
              <Form.Item label="搜索" name="search_key">
                <Input placeholder="DApp ID、名称"></Input>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ border: '1px solid #3f78f9' }}
                  htmlType="reset"
                  type="link"
                >
                  重置
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </Space>
            <Form.Item>
              <Button onClick={handleCreateDapp} type="primary">
                创建
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </div>

      <Table
        rowKey={(record) => record.id}
        dataSource={data?.list}
        columns={columns(chainList, handleEditDapp)}
        pagination={{
          total: data?.total,
          pageSize: pagination.pageSize,
          current: pagination.current,
          onChange: pagination.onChange,
          onShowSizeChange: pagination.onChange
        }}
      />
    </div>
  )
}
