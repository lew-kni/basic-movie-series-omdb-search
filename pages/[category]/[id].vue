<template>
	<div class="page-container text-white mt-28 px-4">
		<NuxtLink
			:to="linkObject"
			class="flex flex-col items-center md:flex-row md:max-w-xl"
		>
			<img
				class="object-cover w-full h-96 md:h-auto md:w-48"
				:src="result.Poster"
				:alt="result.Title"
				alt=""
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<h5 class="mb-2 text-2xl font-bold tracking-tight">
					{{ result.Title }} - {{ result.Year }}
				</h5>
				<p class="mb-3 font-normal">
					{{ result.Plot }}
				</p>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: 'validate-category',
	});

	const { getById } = useOmdbApi();

	const result = ref({});

	const routeObj = useRoute();
	const route = computed(() => routeObj);

	const res = await getById(route.value.params.id);
	result.value = res.data || [];

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
