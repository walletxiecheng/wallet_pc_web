import React from 'react'
import './index.less'
import closeIcon from '@/assets/icon/dark/icon-close-line.svg'
import { Form, Input, Button, Flex } from 'antd'
import { updateAccountKeys } from '@/service'
import { showError, showSuccess } from '@/common/message'
import { pageParams } from '@/common/config'

export default function EditToast({
  showEdit,
  setShowEdit,
  currentData,
  runApiList
}) {
  const onFinish = async (values) => {
    values.uid = currentData.uid
    console.log(values)
    try {
      await updateAccountKeys(values)
      showSuccess('更新成功')
      runApiList(pageParams)
    } catch (err) {
      showError('更新失败')
    }
  }
  return (
    <div
      className="editIPcontainer"
      style={{ display: showEdit ? 'block' : 'none' }}
    >
      <header className="toastTitle">
        <div>提示</div>
        <img
          src={closeIcon}
          onClick={() => {
            setShowEdit(false)
          }}
        />
      </header>
      <div className="line" />
      <Form layout="vertical" className="form" onFinish={onFinish}>
        <Form.Item
          label="API地址"
          name="bind_ip"
          initialValue={currentData?.bind_ip}
        >
          <Input placeholder="请输入更新IP" />
        </Form.Item>
        <Form.Item
          label="备注"
          name="remark"
          initialValue={currentData?.remark}
        >
          <Input placeholder="请输入更新备注" />
        </Form.Item>
        <Form.Item>
          <Flex justify="right">
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  )
}
