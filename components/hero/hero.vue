<template>
	<section
		class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
	>
		<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
			>
				{{ title }}
			</h1>
			<p
				v-if="subtitle"
				class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
				v-html="subtitle"
			/>
			<div
				class="mt-4 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
			>
				<slot></slot>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: false,
		},
	});
</script>
