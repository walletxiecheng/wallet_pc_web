import React from 'react'
import { Button, Flex, Form, Table } from 'antd'
import TKTitle from '@/components/TKTitle'
import { usePagination } from 'ahooks'
import { columns } from './config'
import {
  getFlashCoinInfo,
  addFlashCoinInfo,
  updateFlashCoinInfo
} from '@/service/flash'
import { header, pageParams } from '@/common/config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import FlashCoinForm from './components/FlashCoinForm'
import { showError, showSuccess } from '@/components/TKMessage'

export default function FlashCoinManager() {
  const [form] = Form.useForm() //添加/修改币种表单
  // 获取闪兑币种信息列表
  const getFlashCoinList = async (params) => {
    try {
      const { data } = await getFlashCoinInfo(params)
      return { total: data?.total, list: data?.coin_type_list }
    } catch (err) {
      return { total: 0, list: [] }
    }
  }
  const { data, run, pagination } = usePagination(getFlashCoinList, {
    defaultParams: [pageParams]
  })
  // 添加币种
  const addCoinType = () => {
    form.resetFields()
    openModal({
      title: '添加币种',
      content: <FlashCoinForm form={form} />,
      handleOk: async () => {
        const result = await form.validateFields()
        try {
          await addFlashCoinInfo(result, header)
          showSuccess('添加币种成功')
          run(pageParams)
        } catch (err) {
          showError('添加币种失败，请重试。')
        }
      }
    })
  }

  // 修改币种类型
  const editCoinType = (record) => {
    form.resetFields()
    form.setFieldsValue(record)
    openModal({
      title: '修改币种',
      content: <FlashCoinForm form={form} />,
      handleOk: async () => {
        const result = await form.validateFields()
        result.sort = Number(result.sort)
        result.id = record.id
        try {
          await updateFlashCoinInfo(result)
          showSuccess('修改币种成功')
          run(pageParams)
        } catch (err) {
          showError('修改币种失败，请重试。')
        }
      }
    })
  }
  return (
    <div>
      <TKTitle header={'币种管理'} />
      <Flex justify="end">
        <Button
          type="primary"
          onClick={() => {
            addCoinType()
          }}
        >
          添加币种
        </Button>
      </Flex>
      <Table
        columns={columns(editCoinType)}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: data?.total,
          onchange: pagination.onChange,
          onShowSizeChange: pageParams.onShowSizeChange
        }}
        rowKey={(record) => record.id}
        dataSource={data?.list || []}
      />
    </div>
  )
}
