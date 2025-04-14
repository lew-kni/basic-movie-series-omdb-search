<template>
	<div class="space-x-4">
		<router-link
			:to="{ name: 'category', params: { category: 'movie' } }"
			class="text-white border-white border-b-0 hover:border-b transition-all"
		>
			Movies
		</router-link>
		<router-link
			:to="{ name: 'category', params: { category: 'series' } }"
			class="text-white border-white border-b-0 hover:border-b transition-all"
		>
			TV Series
		</router-link>
		<router-link
			:to="{ name: 'contact' }"
			class="text-white border-white border-b-0 hover:border-b transition-all"
		>
			Contact
		</router-link>
	</div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
