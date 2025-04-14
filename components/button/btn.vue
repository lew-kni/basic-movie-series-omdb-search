<template>
	<router-link
		:to="to"
		class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none transition-all"
		:class="{
			'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': isBlue,
			'bg-pink-500 hover:bg-pink-800 focus:ring-pink-300': isPink,
		}"
	>
		{{ text }}
	</router-link>
</template>

<script setup lang="ts">
	const props = defineProps({
		to: {
			type: Object,
			required: true,
		},
		text: {
			type: String,
			default: 'More Info',
		},
		isBlue: {
			type: Boolean,
			default: false,
		},
		isPink: {
			type: Boolean,
			default: false,
		},
	});
</script>
<style scoped lang="scss"></style>
