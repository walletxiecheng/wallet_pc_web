import { showMsg } from '@/components/TKMessage'
import { getAllCharacterName } from '@/service/role'

// 获取角色列表
export const getAllCharacterNameHandler = async () => {
  const { data } = await getAllCharacterName()
  if (data.code !== 0) {
    showMsg('获取角色列表失败', 'error')
    return Promise.reject()
  }
  return data.data
}
