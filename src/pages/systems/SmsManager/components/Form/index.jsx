import React from 'react'
import { Form, Input, Radio } from 'antd'

/**
 *
 * @description 短信管理的表单编辑&创建组件
 * @param {Object} props.form 必传参数：form实例对象，方便对Form表单进行控制
 * @param {Object} props.initialValues 可选参数：Form表单的初始值，注意：初始值只能传一次，后续无法更改，若要更改初始值建议使用form.setFieldsValue(初始值对象)
 * @returns
 */
export const SmsForm = (props) => {
  const { initialValues, form } = props

  return (
    <Form layout="vertical" form={form} initialValues={initialValues}>
      <Form.Item
        label="编号"
        name="id"
        rules={[{ required: true, message: '请填写编号' }]}
      >
        <Input placeholder="6位数字" />
      </Form.Item>
      <Form.Item
        label="名称"
        name="name"
        rules={[{ required: true, message: '请填写名称' }]}
      >
        <Input placeholder="不超过18字" />
      </Form.Item>
      <Form.Item
        label="唯一标识"
        name="key"
        rules={[{ required: true, message: '请填写唯一标识' }]}
      >
        <Input placeholder="仅限英文字符" />
      </Form.Item>
      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: '请填写内容' }]}
      >
        <Input placeholder="短信内容，70字" />
      </Form.Item>
      <Form.Item
        label="发送上限"
        name="sendMax"
        rules={[{ required: true, message: '请填写发送上限' }]}
      >
        <Input placeholder="单日接受不了上限，0或未选择是为无上限" />
      </Form.Item>
      <Form.Item
        label="状态"
        name="state"
        rules={[{ required: true, message: '请选择状态' }]}
      >
        <Radio.Group>
          <Radio value={1}>启用</Radio>
          <Radio value={0}>禁用</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}
