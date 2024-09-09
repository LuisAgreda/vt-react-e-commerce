export const totalPrice = (values: number[]) => values.reduce((acc, value) => acc + value, 0)

export const getDate = () => {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hour = date.getHours()
  const minutes = date.getMinutes()

  const fullDate = `${day}/${month}/${year} - ${hour}:${minutes}`

  return fullDate
}
