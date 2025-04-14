<template>
	<div>
		<h5
			class="mb-2 text-2xl font-bold tracking-tight block md:hidden text-center"
		>
			<span class="text-pink-500">{{ item.Title }}</span>
			- {{ item.Year }}
		</h5>
		<div class="flex flex-col items-center md:flex-row">
			<img
				class="object-cover w-full max-w-80 md:max-w-none"
				:class="imageRight ? 'md:order-2' : 'md:order-1'"
				:src="item.Poster"
				:alt="item.Title"
				alt="Title Poster Image"
			/>
			<div
				class="flex flex-col justify-between p-4 leading-normal"
				:class="imageRight ? 'md:order-1' : 'md:order-2'"
			>
				<h5 class="mb-2 text-2xl font-bold tracking-tight hidden md:block">
					<span class="text-pink-500">{{ item.Title }}</span>
					- {{ item.Year }}
				</h5>
				<p class="mb-3 font-normal">
					{{ item.Plot }}
				</p>

				<ul class="mt-5" v-if="!hideAdditionalInfo">
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Type:</span>
						<span class="flex-grow">{{ item.Type }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Genre:</span>
						<span class="flex-grow">{{ item.Genre }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">
							Runtime:
						</span>
						<span class="flex-grow">{{ item.Runtime }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Rated:</span>
						<span class="flex-grow">{{ item.Rated }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Actors:</span>
						<span class="flex-grow">{{ item.Actors }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Awards:</span>
						<span class="flex-grow">{{ item.Awards }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">
							Director:
						</span>
						<span class="flex-grow">{{ item.Director }}</span>
					</li>
					<li class="flex flex-row">
						<span class="float-left font-bold pe-2 text-pink-500">Writer:</span>
						<span class="flex-grow">{{ item.Writer }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3" v-if="!hideAdditionalInfo">
			<div
				v-for="(rating, rIndex) in item.Ratings"
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
	const props = defineProps({
		item: {
			type: Object,
			required: true,
		},
		imageRight: {
			type: Boolean,
			default: false,
		},
		hideAdditionalInfo: {
			type: Boolean,
			default: false,
		},
	});
</script>

<style scoped></style>
