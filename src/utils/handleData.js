// 处理数据

//json转换为表单
export const convertJsonToFormData = (json) => {
  const formData = new FormData()
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(key, json[key])
      formData.append(key, json[key])
    }
  }
  return formData
}
