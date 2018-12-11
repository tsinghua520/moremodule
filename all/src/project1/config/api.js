if (process.env.NODE_ENV === 'production') {
  console.log('product')
  window._BasseUrl = 'dome2.h-world.com/api/production'
} else {
  console.log('other')
  window._BasseUrl = 'dome2.h-world.com/api/other'
}
export const loginApi = window._BasseUrl + 'loginApi'
