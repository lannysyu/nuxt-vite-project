<script
  lang="ts"
  setup
>
// middleware 中間件
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
  })
});

// appConfig
const appConfig = useAppConfig();
const { theme } = appConfig;

// google登入驗證
const callback = (response) => {
  console.log(response)
}

// Cookie
const name = useCookie('name')
const counter = useCookie('counter', { maxAge: 10 }) // 十秒後過期
const setNameCookie = () => {
  name.value = 'Ryan'
}
const setCounterCookie = () => {
  counter.value = Math.round(Math.random() * 1000) // 設置為 0 ~ 999 的隨機亂數
}
const sendRequest = () => {
  useFetch('/api/counter', {
    headers: useRequestHeaders(['cookie'])
  })
}

// I18n 多國語系
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n() // 使用 setLocale 函式切換語系(在 cookie 裡會記錄偏好語系)


</script>

<template>
  <div>
    <p>Page: index</p>
    <ContentItem />
    <div>
      <NuxtLink to="/about">前往 About</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/customer">前往 customer</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/counter">前往 counter</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/show">前往 show</NuxtLink>
    </div>
    -------
    <!-- AppConfig 具響應式更新、伺服器端和客戶端皆能存取 -->
    <div>
      <NuxtLink to="/config">前往 config</NuxtLink>
      <p><span>theme.darkMode:</span>{{ theme.darkMode }}</p>
    </div>
    -------
    <!-- 串接 Google OAuth 登入驗證-->
    <div class="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex w-full max-w-md flex-col items-center justify-center">
        <h1 class="my-8 flex text-center text-3xl font-bold tracking-tight text-emerald-500">
          Nuxt App
        </h1>
        <ClientOnly>
          <GoogleLogin
            :callback="callback"
            popup-type="TOKEN"
          >
            <button
              class="flex rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span class="text-slate-500 group-hover:text-slate-600">使用 Google 進行登入</span>
            </button>
          </GoogleLogin>
        </ClientOnly>
      </div>
    </div>
    -------
    <!-- 使用 useCookie 來設定 Cookie -->
    <div class="flex flex-col items-center justify-center px-4 py-6">
      <div class="flex w-full max-w-md flex-col justify-center">
        <div class="flex flex-col items-center">
          <h2 class="my-4 text-center text-3xl font-bold tracking-tight text-gray-700">Cookie</h2>
        </div>
        <div class="mx-auto flex w-full max-w-xs flex-row justify-around gap-2">
          <div class="flex flex-col items-center gap-2">
            <button
              type="button"
              class="w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              @click="setNameCookie"
            >
              設置 name
            </button>
            <div class="flex">
              <label class="text-lg font-semibold text-emerald-500">name:</label>
              <span class="ml-2 flex text-lg text-slate-700">{{ name }}</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button
              type="button"
              class="w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              @click="setCounterCookie"
            >
              設置 counter
            </button>
            <div class="flex">
              <label class="text-lg font-semibold text-emerald-500">counter:</label>
              <span class="ml-2 flex text-lg text-slate-700">{{ counter }}</span>
            </div>
          </div>
        </div>
        <div class="mt-2 flex w-full max-w-md flex-col items-center">
          <button
            type="button"
            class="mt-2 w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            @click="sendRequest"
          >
            發送 API 請求至 /api/counter
          </button>
        </div>
      </div>
    </div>
    -------
    <!-- 建立多國語系頁面 -->
    <div class="flex flex-col items-center bg-white">
      <h1 class="my-8 text-6xl font-medium text-blue-500">
        {{ $t('hello') }}
        <!-- $t : nuxt 提供的 helper，取得語系翻譯檔案中所對應的值 -->
      </h1>
      <div class="flex gap-4">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="setLocale('en')"
        >
          English
        </button>

        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="setLocale('zh')"
        >
          繁體中文
        </button>
      </div>
      <div class="mt-4 flex flex-row justify-center">
        <label class="text-gray-600">{{ $t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div>
    </div>
    -------


  </div>
</template>

<style scoped></style>
