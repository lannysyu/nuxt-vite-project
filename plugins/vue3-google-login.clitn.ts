// 安裝 vue3-google-login 套件 npm install -D vue3-google-login
import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public

    nuxtApp.vueApp.use(vue3GoogleLogin, {
        clientId: GOOGLE_CLIENT_ID
    })
})