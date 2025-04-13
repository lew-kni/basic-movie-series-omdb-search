<template>
    <div class="page-container text-white">
        <h1>Category {{ route.params.category }} - {{ route.params.title }}</h1>
        <p>This is a generic Vue 3 page template.</p>
    </div>
</template>

<script setup lang="ts">
const routeObj = useRoute()
const route = computed(() => routeObj)
</script>

<style scoped>
</style>