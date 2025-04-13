<template>
	<Hero
		v-if="viewedTitles.length > 0"
		title="Previously Viewed"
		subtitle="Here are the titles you have previously viewed. You can click on any title to view its details."
	>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5"
		>
			<Card
				v-for="(title, index) in viewedTitles.reverse().slice(0, 3)"
				:key="index"
				:item="title"
				:category="title.Type"
				class="text-left"
			/>
		</div>
	</Hero>
</template>

<script setup lang="ts">
	import { useViewedTitlesStore } from '@/stores/viewedTitles';
	// Get the store instance
	const viewedTitlesStore = useViewedTitlesStore();

	// Access the list of viewed titles
	const viewedTitles = viewedTitlesStore.viewedTitles;
	console.log(viewedTitles);
</script>

<style scoped lang="scss"></style>
