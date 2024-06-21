// 处理数据

//json转换为表单
export const convertJsonToFormData = (json) => {
  const formData = new FormData()
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      formData.append(key, json[key])
    }
  }
  return formData
}

// 给表格数据添加key
export const addKeyByTable = (data) => {
  return (
    data.map((item) => {
      return {
        ...item,
        key: item.ID
      }
    }) || []
  )
}
