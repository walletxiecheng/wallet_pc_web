import axiossDefine from '@/common/axiosSetting'

// 设置邀请人

export const setInvitor = (data) => {
  return axiossDefine.post('/back/commercialManager/account/setInvitor', data)
}
