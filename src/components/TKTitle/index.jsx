import React from 'react'
import { Divider } from 'antd'
export default function TKTitle({ header }) {
  return (
    <>
      <header>
        <h2>{header}</h2>
      </header>
      <Divider />
    </>
  )
}
