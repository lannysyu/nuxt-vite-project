// 建立 Server API 取得與設置 Cookie
export default defineEventHandler((event) => {
    let counter = getCookie(event, 'counter')
  
    counter = parseInt(counter, 10) || 0 // 將 counter 解析為一個整數，若失敗則設定為零
    counter += 1
  
    setCookie(event, 'counter', counter)
  
    return { counter }
  })
