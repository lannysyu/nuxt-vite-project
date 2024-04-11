<script
  lang="ts"
  setup
></script>

<!-- <template>
  <div>
    <LayoutHeaderItem />
    <slot />
    <LayoutFooterItem />
  </div>
</template> -->

<template>
  <div class="wrap-layout">
    <header class="wrap-header">
      <slot name="header">
        <LayoutHeaderItem />
      </slot>
    </header>
    <main class="wrap-main">
      <slot name="main">
        <slot>
          <p>Component: ContentItem</p>
        </slot>
      </slot>
    </main>
    <footer class="wrap-footer">
      <slot name="footer">
        <LayoutFooterItem />
      </slot>
    </footer>
  </div>
</template>

<style scoped></style>
