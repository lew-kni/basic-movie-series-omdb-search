<template>
	<div class="page-container text-white mt-28 px-4">
		<button
			type="submit"
			class="mb-4 text-white bg-pink-500 hover:bg-pink-800 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			@click="router.back()"
		>
			🡐 Back
		</button>
		<TitleCard :item="result" />
	</div>
</template>

<script setup lang="ts">
	import { useViewedTitlesStore } from '@/stores/viewedTitles';

	definePageMeta({
		middleware: 'validate-category',
	});

	const { getById } = useOmdbApi();
	const router = useRouter();

	const result = ref({});

	const routeObj = useRoute();
	const route = computed(() => routeObj);

	// Initialize the store
	const viewedTitlesStore = useViewedTitlesStore();

	const res = await getById(route.value.params.id);
	result.value = res.data || [];

	// Add the current title to the viewed list
	viewedTitlesStore.addViewedTitle({
		imdbID: result.value.imdbID,
		Type: route.value.params.category,
		Year: result.value.Year,
		Poster: result.value.Poster,
		Title: result.value.Title,
	});

	const linkObject = computed(() => {
		return {
			name: 'category-id',
			params: {
				category: route.value.params.category,
				id: result.value.imdbID,
			},
		};
	});
</script>

<style scoped></style>
