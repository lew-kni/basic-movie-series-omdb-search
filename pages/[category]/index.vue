<template>
	<div class="page-container text-white">
		<Hero
			:title="`Welcome to the ${category?.friendly} database`"
			:subtitle="`Search for your favorite ${category?.friendly}.`"
			class="pt-12"
		>
			<div class="w-full">
				<p class="text-center text-gray-500 mb-4"></p>
				<Textfield
					class="w-full max-w-md mx-auto"
					@search="handleSearch"
					hasSearch
					:placeholder="`Search ${category?.friendly}...`"
					:defaultValue="route.query.q"
				/>
			</div>
		</Hero>

		<div class="mt-4 px-4" v-if="searchTerm">
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
	import { determineType, determineCategory } from '~/utils/helpers';

	const { search } = useOmdbApi();
	let searchTerm = ref('');
	const results = ref([]);

	definePageMeta({
		middleware: 'validate-category',
	});

	const routeObj = useRoute();
	const route = computed(() => routeObj);

	const category = computed(() =>
		determineCategory(route.value?.params.category)
	);

	const type = computed(() => determineType(category.value?.url || ''));

	onMounted(async () => {
		if (route.value.query.q) {
			handleSearch(route.value.query.q);
		}
	});

	const handleSearch = async (value: string) => {
		searchTerm.value = value;
		const res = await search(value, type.value);
		results.value = res.data || [];
		const query = { ...routeObj.query, q: value };
		await useRouter().replace({ query });
	};
</script>

<style scoped></style>
