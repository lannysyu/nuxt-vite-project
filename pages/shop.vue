<script
  lang="ts"
  setup
>

// 預設id、id2
const id = 123;
const id2 = 456;

</script>

<template>
  <div>
    Page: shop

    <NuxtLink
      :to="`/shop/${id}`"
      style="margin-right: 8px"
    >商品細節1</NuxtLink>

    <NuxtLink
      :to="`/shop/${id2}`"
      style="margin-right: 8px"
    >商品細節2</NuxtLink>
  </div>

  <NuxtPage />

</template>

<style scoped></style>
