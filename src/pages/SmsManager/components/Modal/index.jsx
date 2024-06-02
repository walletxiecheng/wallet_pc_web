import { Modal } from 'antd'

/**
 * @description 弹窗打开函数，打开一个Modal弹窗
 * @param {string} props.title 必传参数：弹窗标题
 * @param {React.Component} props.content 必传参数：弹窗内容组件
 * @param {string} props.icon 选填参数：弹窗左上角图标，不传默认不展示图标
 * @param {string} props.okText 选填参数：弹窗右下角“确认”按钮文案，不传默认展示“确认”
 * @param {React.Component} props.closable 选填参数：弹窗右上角关闭图标，不传默认展示“X”
 * @param {string} props.cancelText 选填参数：弹窗右下角“取消”按钮文案，不传默认展示“取消”
 * @param {function} props.ok 选填参数：点击“确认“按钮的回调函数，可通过ok()函数的返回值控制弹窗是否关闭：
 *                            返回resolve状态的Promise关闭弹窗例如：Promise.resolve()
 *                            返回reject状态的Promise不关闭弹窗例如：Promise.reject()
 * @param {function} props.onCancel 选填参数：点击“取消“按钮的回调函数，可通过onCancel()函数的返回值控制弹窗是否关闭：
 *                            返回resolve状态的Promise关闭弹窗例如：Promise.resolve()
 *                            返回reject状态的Promise不关闭弹窗例如：Promise.reject()
 * @returns {object} 返回一个modal对象，对象定义如下：
 * {
 *    destroy: () => void; 调用之后关闭销毁弹窗
 *    update: (configUpdate: ConfigUpdate) => void; 调用之后更新弹窗
 *  }
 */
export const openModal = (props = {}) => {
  const {
    title,
    icon,
    closable,
    content,
    okText,
    cancelText,
    handleOk,
    handleCancel
  } = props

  const modal = Modal.confirm({
    title,
    content,
    icon: icon ?? null,
    okText: okText ?? '确定',
    closable: closable ?? true,
    cancelText: cancelText ?? '取消',
    onOk: () => {
      if (handleOk) {
        return handleOk(modal)
      }
    },
    onCancel: () => {
      if (handleCancel) {
        return handleCancel(modal)
      }
    }
  })

  return modal
}
