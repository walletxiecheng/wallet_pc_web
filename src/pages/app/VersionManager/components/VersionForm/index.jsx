import React from 'react'
import { Form, Input, DatePicker, Select, Radio, Button, Space } from 'antd'
import { abandonOptions, forceOptions, platOptions } from '../../config'
import { openModal } from '@/pages/systems/SmsManager/components/Modal'
import { showError, showSuccess } from '@/components/TKMessage'
import { sendLoginVerificationCode } from '@/service/login'
import { useUserStore } from '@/stores'

export default function VersionForm({ form, changeCode }) {
  const [codeForm] = Form.useForm()
  const phone_number = useUserStore.getState().userInfo.phone_number
  const sendCode = async () => {
    const req = {
      phone_number: phone_number,
      verify_type: 6
    }
    try {
      await sendLoginVerificationCode(req)
      return showSuccess('发送成功，请在手机查收。')
    } catch (err) {
      showError('发送验证码失败，请稍后重试。')
      return Promise.reject()
    }
  }

  // 更改是否启用
  const onChange = () => {
    openModal({
      title: '输入验证码以确认操作',
      content: (
        <Form form={codeForm}>
          <Form.Item
            label="手机号"
            name="phone_number"
            initialValue={phone_number}
          >
            <Input disabled />
          </Form.Item>
          <Space>
            <Form.Item label="验证码" name="verify_type">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="link"
                onClick={() => {
                  sendCode()
                }}
              >
                获取验证码
              </Button>
            </Form.Item>
          </Space>
        </Form>
      ),
      handleOk: async () => {
        const code = codeForm.getFieldValue('verify_type')
        form.setFieldValue('verify_type', code)
      }
    })
  }
  return (
    <div>
      <Form layout="vertical" form={form}>
        <Form.Item label="版本号" name="version">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="上线日期" name="online_time">
          <DatePicker placeholder="请选择" />
        </Form.Item>
        <Form.Item label="所属系统类型" name="platform">
          <Select placeholder="请选择" options={platOptions} />
        </Form.Item>
        <Form.Item label="支持系统版本" name="system_version">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="是否强制更新" name="is_force">
          <Select placeholder="请选择" options={forceOptions} />
        </Form.Item>
        <Form.Item label="下载地址" name="url">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="更新前提示词描述" name="content">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="更新后功能概述" name="function_desc">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="是否停用" name="is_abandon">
          <Radio.Group options={abandonOptions} onChange={onChange} />
        </Form.Item>
      </Form>
    </div>
  )
}
