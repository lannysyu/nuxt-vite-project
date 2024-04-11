// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 使用 tools
  devtools: { 
    enabled: true 
  },

  // 元件自動引入
  imports: {
    autoImport: true,
    // 調整自動載入額外掃描的資料夾
    dirs: [
      // 掃描 composables 目錄頂層
      'composables',
      // 掃描深度一層的特定檔案
      'composables/*/index.{ts,js,mjs,mts}',
      // 掃描整個 composables 目錄下的檔案
      'composables/**',
      // 設定 stores 目錄的自動載入
      'stores'
    ]
  },

  modules: [
    // 使用 pinia npm install pinia @pinia/nuxt @nuxtjs/composition-api
    '@pinia/nuxt',
    // 使用 nuxt-icon npm install --save-dev nuxt-icon
    'nuxt-icon',
    // 安裝 Pinia 持久化插件 npm install -D @pinia-plugin-persistedstate/nuxt
    '@pinia-plugin-persistedstate/nuxt',
    // 安裝 Nuxt I18n 套件 npm install -D @nuxtjs/i18n@next
    '@nuxtjs/i18n',
  ],

  // app: {
  //   layoutTransition: { name: 'layout', mode: 'out-in' },
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },

  // 引入 bootstrap
  css: [
    '@/assets/scss/all.scss'
  ],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
        autoprefixer: true
    }
  },

  // 使用 Runtime Config
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P', // 會被 NUXT_API_SECRET 環境變數覆蓋
    public: {
      apiBase: '/api', // 會被 NUXT_PUBLIC_API_BASE 環境變數覆蓋
      googleClientId: '',
    },
    googleClientSecret:'',
  },

  // 配置 Nuxi I18n 模組
  i18n: {
    langDir: 'locales', // 多國語系檔案放置位置
    locales: [
      {
        code: 'en', // 語系識別代碼
        iso: 'en-US', // 搜尋引擎最佳化的命名方式
        file: 'en.json' // 語系檔案放置路徑
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh', // 預設語系
    strategy: 'no_prefix', // 調整多國語系路由策略，no_prefix 是網址中不會出現語系代碼的前綴值
    detectBrowserLanguage: { // detectBrowserLanguage 配置，配置語系代碼於 cookie 同步的策略
      useCookie: true, // 使用 setLocale 時紀錄於 cookie 裡
      cookieKey: 'i18n_redirected', // 儲存於 cookie 時，cookie 的名稱
      redirectOn: 'root' // 僅檢測網站上語系的設定，這個不太懂
    }
  }
})
