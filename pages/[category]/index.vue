<template>
	<div class="page-container text-white">
		<h1>Category {{ route.params.category }}</h1>
		<p>This is a generic Vue 3 page template.</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: 'validate-category',
	});

	const routeObj = useRoute();
	const route = computed(() => routeObj);
</script>

<style scoped></style>
