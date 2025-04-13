<template>
	<div class="page-container text-white mt-28 px-4">
		<button
			type="submit"
			class="mb-4 text-white bg-pink-500 hover:bg-pink-800 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			@click="router.back()"
		>
			🡐 Back
		</button>
		<div class="flex flex-col items-center md:flex-row">
			<h5 class="mb-2 text-2xl font-bold tracking-tight block md:hidden">
				<span class="text-pink-500">{{ result.Title }}</span>
				- {{ result.Year }}
			</h5>
			<img
				class="object-cover w-full max-w-80 md:max-w-none"
				:src="result.Poster"
				:alt="result.Title"
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight hidden md:block">
					<span class="text-pink-500">{{ result.Title }}</span>
					- {{ result.Year }}
				</h5>
				<p class="mb-3 font-normal">
					{{ result.Plot }}
				</p>

				<ul class="mt-5">
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Type:</span>
						<span class="flex-grow">{{ result.Type }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Genre:</span>
						<span class="flex-grow">{{ result.Genre }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">
							Runtime:
						</span>
						<span class="flex-grow">{{ result.Runtime }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Rated:</span>
						<span class="flex-grow">{{ result.Rated }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Actors:</span>
						<span class="flex-grow">{{ result.Actors }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Awards:</span>
						<span class="flex-grow">{{ result.Awards }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">
							Director:
						</span>
						<span class="flex-grow">{{ result.Director }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Writer:</span>
						<span class="flex-grow">{{ result.Writer }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3">
			<div
				v-for="(rating, rIndex) in result.Ratings"
				:key="rIndex"
				class="flex flex-col items-center justify-center p-4"
			>
				<p class="text-lg font-bold">{{ rating.Source }}</p>
				<p class="text-lg font-bold">{{ rating.Value }}</p>
				<p class="text-lg font-bold">
					{{ rating.Source === 'Rotten Tomatoes' ? '🍅' : '⭐' }}
				</p>
			</div>
		</div>
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
