import React, { useEffect } from 'react'
import style from './index.module.less'
import TkHeader from '@/components/TkHeader'
import TkMenu from '@/components/TkMenu'
import TkContent from '@/components/TkContent'
import { Layout } from 'antd'
import { useTokenStore } from '@/stores'
import { useNavigate } from 'react-router-dom'

const BaseLayout = () => {
  const navigate = useNavigate()
  // 检测token
  const checkToken = () => {
    const token = useTokenStore?.getState()?.token || null
    if (!token) {
      navigate('/login')
    }
  }
  useEffect(() => {
    checkToken()
  }, [])

  return (
    <Layout className={style.layoutContainer}>
      <TkHeader />
      <Layout>
        <TkMenu />
        <TkContent />
      </Layout>
    </Layout>
  )
}
export default BaseLayout
