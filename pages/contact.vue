<template>
	<div class="page-container text-white">
		<Hero
			title="Contact Us"
			subtitle="Are we missing your favourite movie or TV series?<br/>Or simply have some feedback? We're happy to hear from you!"
			class="pt-12"
		></Hero>
	</div>
</template>

<script setup lang="ts">
	const routeObj = useRoute();
	const route = computed(() => routeObj);
</script>

<style scoped></style>
