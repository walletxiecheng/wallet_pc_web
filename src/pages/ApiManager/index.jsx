import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import KeyToast from './components/KeyToast'
import EditToast from './components/EditToast'
import { openModal } from '@/components/Modal'
import { Form, Input, Button, Checkbox, Table } from 'antd'
import {
  getKeysPermissions,
  createAccountKeys,
  getAccountKeys
} from '@/service'
import './index.less'
import { usePagination, useRequest } from 'ahooks'
import { showError, showSuccess } from '@/common/message'
import { apiColumns } from './config'
import { pageParams } from '@/common/config'
import Tips from '../WalletAccount/CarryCoin/components/Tips'
import GoogleCodeModal from './components/GoogleCodeModal'
import { useTranslation } from 'react-i18next'

export default function APIManager() {
  // 是否展示密钥提示
  const [showToast, setShowToast] = useState(false)
  // form表
  const [form] = Form.useForm()
  // 当前选中uid
  const [uid, setUid] = useState(null)
  // 是否展示提示框
  const [tips, showTips] = useState(false)
  // 是否展示修改弹窗
  const [showEdit, setShowEdit] = useState(false)
  const [showGoogleToast, setShowGoogleToast] = useState(false)
  // 编辑数据
  const [currentData, setCurrentData] = useState(null)
  const [accessKey, setAccessKey] = useState()
  const [secretKey, setSecretKey] = useState()

  const { t } = useTranslation()

  // 获取权限映射表
  const { data: permissionOptions } = useRequest(async () => {
    const { data } = await getKeysPermissions()
    data.map((item, index) => {
      item.value = item.code
      item.label = item.description
    })
    return data
  })

  // 获取apiKey记录
  const getAccountKeysHandler = async (params) => {
    try {
      const { data } = await getAccountKeys(params)
      return data
    } catch (err) {
      showError(err.msg)
    }
  }
  const {
    data: apiList,
    run: runApiList,
    pagination
  } = usePagination(getAccountKeysHandler, {
    defaultParams: [pageParams]
  })

  // 创建密钥
  const onFinish = async (values) => {
    form.resetFields()
    try {
      const { data } = await createAccountKeys(values)
      setAccessKey(data.access_key)
      setSecretKey(data.secret_key)
      showSuccess('创建成功')
      setShowToast(true)
      runApiList(pageParams)
    } catch (err) {
      showError(err?.msg)
    }
  }

  return (
    <>
      <NavBar />
      <KeyToast
        showToast={showToast}
        setShowToast={setShowToast}
        accessKey={accessKey}
        secretKey={secretKey}
      />
      <EditToast
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        currentData={currentData}
        runApiList={runApiList}
      />
      <Tips tips={tips} toggleToast={showTips}></Tips>
      <GoogleCodeModal
        showGoogleModal={showGoogleToast}
        toggleGoogleModal={setShowGoogleToast}
        uid={uid}
      ></GoogleCodeModal>
      <div className="apiContainer">
        <div className="creteAPI">
          <header>{t('apiManager.Create API Key')}</header>
          <main>
            <div className="createFormBox">
              <Form
                layout="vertical"
                className="form"
                onFinish={onFinish}
                form={form}
              >
                <Form.Item
                  label={t('apiManager.Remarks')}
                  name="remark"
                  rules={[
                    { required: false, message: 'Please input your remark!' }
                  ]}
                >
                  <Input placeholder="请输入备注" />
                </Form.Item>

                <Form.Item
                  label={t('apiManager.Permission')}
                  initialValue={0}
                  name="permissions"
                >
                  <Checkbox.Group options={permissionOptions} />
                </Form.Item>

                <Form.Item label={t('apiManager.bindTitle')} name="bind_ip">
                  <Input.TextArea placeholder={t('apiManager.bindTip')} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {t('apiManager.Establish')}
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="tips">
              <div className="title">{t('apiManager.Tips')}</div>
              <div className="content">{t('apiManager.tipsContent')}</div>
            </div>
          </main>
        </div>

        <div className="tableBox">
          <div className="tableTitle">{t('apiManager.My API Key')}</div>
          <Table
            dataSource={apiList?.records || []}
            rowKey={(record) => record.uid}
            loading={!apiList}
            pagination={{
              total: apiList?.total,
              current: pagination.current,
              pageSize: pagination.pageSize,
              onChange: pagination.onChange,
              hideOnSinglePage: true,
              onShowSizeChange: pagination.onChange
            }}
            columns={apiColumns(
              setShowEdit,
              setCurrentData,
              showTips,
              setUid,
              setShowGoogleToast,
              t

            )}
          />
        </div>
      </div>
    </>
  )
}
