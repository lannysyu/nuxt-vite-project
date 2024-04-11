<script setup>
// await useFetch 方法發送 GET 請求
const { data, error } = await useFetch('/api/test')

// await useFetch 方法發送 POST 請求
// const { data, error } = await useFetch('/api/test', {
//   method: 'POST',
//   body: JSON.stringify({ key: 'value' }) // 這裡是你要發送的資料
// })

// 增加計算式
const { count, increment, decrease } = countNum();

// 捲動頁面
const scrollToElement = () => {
  useNuxtApp().$scrollTo('#element');
}

// search api 請求
const keyword = ref('');
const page = ref(1);
const pageSize = ref(10);
const { fetch: search, data: searchData, error: searchError } = useFetch(async () => {
  if (!keyword.value) return;
  const res = await fetch('/api/search', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ keyword: keyword.value, query: { page: page.value, pageSize: pageSize.value } }),
  });

  if (res.ok) {
    return await res.json(); // 這裡返回的是 Promise 的結果，而不是 Promise 本身
  } else {
    throw new Error('搜尋失敗');
  }
});

// const performSearch = async () => {
//   try {
//     await search(); // 這裡正確地調用了 fetch 函數
//     console.log(searchData.value); // 使用 searchData 來訪問請求的結果
//   } catch (error) {
//     console.error(searchError.value); // 處理可能的錯誤
//   }
// };


</script>

<template>
  <div class="d-flex vh-100">
    <div class="h-100 w-100">
      <div
        style="height: auto; width: 1640px;"
        class="mx-auto overflow-auto"
      >
        <NuxtLayout>
          <NuxtPage />

          <!-- 渲染 data / error  -->
          <div>
            {{ data }}
            {{ error }}
          </div>

          <!-- 增加計算式 -->
          <div>
            <button @click="decrease">減少1</button>
            <span>{{ count }}</span>
            <button @click="increment">增加1</button>
          </div>

          <!-- 捲動頁面 -->
          <div class="flex flex-col items-center overflow-y-visible px-6 py-4">
            <a
              v-scroll-to="'#element'"
              href="#"
              class="my-4 font-medium text-gray-600"
            >
              捲動頁面至 #element
            </a>
            <button
              v-focus
              class="my-4 w-fit rounded-full bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              @click="scrollToElement"
            >
              捲動頁面至 #element
            </button>
            <div
              id="element"
              class="mt-24"
            >
              <h1 class="p-2 text-6xl font-semibold text-sky-400">這裡是 #element</h1>
            </div>
            <div class="h-screen w-full"></div>
          </div>

          <!-- search api 請求 -->
          <div>
            <input
              type="text"
              v-model="keyword"
              placeholder="輸入關鍵字"
              class="me-1"
            >
            <!-- <button @click="performSearch()">搜尋</button> -->
          </div>
          <!-- <div>
            結果：{{ searchData }}
          </div> -->

        </NuxtLayout>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>
