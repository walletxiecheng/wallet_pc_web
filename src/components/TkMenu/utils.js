import { menuItems } from './config'

export const getBreadcrumbItemsByPathName = (pathName) => {
  const result = []

  const dfs = (menuItems) => {
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i]

      if (item?.path === pathName) {
        result.unshift({ ...item })
        return true
      }

      if (item?.children) {
        const isPush = dfs(item?.children)
        isPush && result.unshift({ ...item, children: [] })
      }
    }

    return false
  }

  dfs(menuItems)

  return result
}
