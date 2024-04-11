<script
  lang="ts"
  setup
></script>

<template>
  <div>
    <!-- <h1 style="font-size: 48px">Component: layout/HeaderItem</h1> -->

    <nav
      style="height: 140px; width: 1640px;"
      class="header-bar"
    >
      <nuxt-link
        to="/"
        class="header"
      >回到首頁</nuxt-link>
      <nuxt-link
        to="/about"
        class="header"
      >關於</nuxt-link>
      <nuxt-link
        to="/introduce"
        class="header"
      >產品介紹</nuxt-link>
      <nuxt-link
        to="/shop"
        class="header"
      >購買商品</nuxt-link>
      <nuxt-link
        to="/customer"
        class="header"
      >客服中心</nuxt-link>
      <nuxt-link
        to="/cart"
        class="header"
      >
        <Icon
          name="iconamoon:shopping-card-thin"
          size="35"
        ></Icon>
      </nuxt-link>
    </nav>
  </div>
</template>

<style scoped></style>
