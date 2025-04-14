<template>
	<div class="page-container text-white">
		<Hero
			title="Movies & TV Series"
			:subtitle="`Search for your favorite Movies & TV Series.`"
			class="pt-12"
		>
			<div class="flex flex-row justify-center gap-4">
				<Btn
					:to="{ name: 'category', params: { category: 'movie' } }"
					text="Movies"
					isBlue
				/>
				<Btn
					:to="{ name: 'category', params: { category: 'series' } }"
					text="TV Series"
					isPink
				/>
			</div>
		</Hero>
		<div class="mt-16 px-4">
			<h1 class="text-center text-2xl font-bold mb-4">
				Welcome to the Movies & TV Series database
			</h1>
			<p class="text-center mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
				reprehenderit dolores pariatur, alias molestias officiis eveniet magnam
				laborum quam, earum ex blanditiis ea illum a. Voluptatibus id placeat
				tempore nihil.
			</p>
		</div>
		<div class="mt-16 px-4" v-if="!loading">
			<h1 class="text-center text-2xl font-bold mb-4">Staff Picks</h1>
			<div v-for="(item, index) in results" :key="item.imdbID" class="mb-4">
				<NuxtLink
					:to="{
						name: 'category-id',
						params: {
							category: item.Type,
							id: item.imdbID,
						},
					}"
				>
					<TitleCard
						class="max-w-xl mx-auto"
						:item="item"
						:imageRight="isEven(index)"
						is-preview
					></TitleCard>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const routeObj = useRoute();
	const route = computed(() => routeObj);
	const { getById } = useOmdbApi();
	const loading = ref(true);
	import { isEven } from '~/utils/helpers';

	const featuredTitles = ref([
		{
			imdbID: 'tt7462410',
			type: 'series',
		},
		{
			imdbID: 'tt0080684',
			type: 'movie',
		},
		{
			imdbID: 'tt3526078',
			type: 'series',
		},
		{
			imdbID: 'tt0120630',
			type: 'movie',
		},
		{
			imdbID: 'tt0168366',
			type: 'series',
		},
		{
			imdbID: 'tt1262426',
			type: 'movie',
		},
		{
			imdbID: 'tt4154796',
			type: 'movie',
		},
	]);

	const results = ref([]);

	featuredTitles.value.forEach((item) => {
		const { imdbID, type } = item;
		getById(imdbID)
			.then((res) => {
				results.value.push(res.data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				loading.value = false;
			});
	});
</script>

<style scoped></style>
