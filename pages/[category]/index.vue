<template>
	<div class="page-container text-white">
		<h1>Category {{ category?.friendly }}</h1>
		<Textfield
			@search="handleSearch"
			hasSearch
			:placeholder="`Search ${category?.friendly}...`"
		/>

		<div class="mt-4">
			<div v-if="!results?.Search?.length" class="text-gray-500">
				<p class="text-center">No results found for '{{ searchTerm }}'.</p>
			</div>
			<template v-else>
				<p class="text-center">Showing results for '{{ searchTerm }}'</p>
				<div
					class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-5"
				>
					<Card
						v-for="item in results.Search"
						:key="item.imdbID"
						:item="item"
						:category="category.url"
						class=""
					/>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Card from '~/components/card/card.vue';

	const { search } = useOmdbApi();
	let searchTerm = ref('');
	const results = ref([]);

	definePageMeta({
		middleware: 'validate-category',
	});

	const routeObj = useRoute();
	const route = computed(() => routeObj);

	const category = computed(() => {
		if (!route.value?.params.category) {
			return;
		}

		const cat = route.value.params.category;

		return {
			url: cat,
			friendly: cat.replace(/-/g, ' '),
		};
	});

	const type = computed(() => {
		if (!category.value.url) {
			return 'movie';
		}

		switch (category.value.url) {
			case 'movies':
				return 'movie';
			case 'tv-series':
				return 'series';
			default:
				return 'movie';
		}
	});

	const handleSearch = async (value: string) => {
		searchTerm = value;
		const res = await search(value, type.value);
		results.value = res.data || [];
	};
</script>

<style scoped></style>
