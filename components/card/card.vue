<template>
	<div
		class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
	>
		<NuxtLink :to="linkObject" :key="item.imdbID" class="flex-1">
			<img
				class="rounded-t-lg object-cover w-full h-full"
				:src="item.Poster"
				alt=""
			/>
		</NuxtLink>
		<div class="p-5">
			<NuxtLink :to="linkObject" :key="item.imdbID">
				<h5
					class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{{ item.Title }}
				</h5>
			</NuxtLink>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
				{{ item.Year }}
			</p>
			<NuxtLink
				:to="linkObject"
				:key="item.imdbID"
				class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				View More Info
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		item: {
			type: Object,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	});

	const linkObject = computed(() => {
		return {
			name: 'category-id',
			params: {
				category: props.category,
				id: props.item.imdbID,
			},
		};
	});
</script>
