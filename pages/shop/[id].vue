<script
    lang="ts"
    setup
>
const { data } = await useFetch('/api/hello')
const show = ref(true)
</script>

<template>
    <div>
        <!-- fetch api hello -->
        <pre>{{ data }}</pre>

        <p>shop id: {{ $route.params.id }}</p>
        <ContentItem />
        <Icon
            name="logos:nuxt"
            size="360"
        ></Icon>
        <Icon
            name="🚀"
            size="80"
        ></Icon>
        <Icon
            name="🤧"
            size="80"
        ></Icon>
        <Icon
            name="ion:add-circle-outline"
            size="80"
        ></Icon>
        <Icon
            name="NuxtIcon"
            size="80"
        ></Icon>
        <Icon
            name="iconamoon:shopping-card-thin"
            size="80"
        ></Icon>
    </div>

    <!-- 切換顯示  -->
    <button @click="show = !show">Toggle</button>

    <!-- Vue transition  -->
    <Transition>
        <p v-if="show">hello hello</p>
    </Transition>

    <Transition name="fade">
        <p v-if="show">hello hello fade</p>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
