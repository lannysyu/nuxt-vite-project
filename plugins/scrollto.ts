import VueScrollTo from 'vue-scrollto'

// 安裝 Vue Scrollto 套件
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo)

  return{
    // 添加 Helper
    provide: {
      scrollTo: VueScrollTo.scrollTo
    }
  }
})
