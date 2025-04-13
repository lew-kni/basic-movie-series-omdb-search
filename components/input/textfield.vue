<template>
	<div class="flex items-center">
		<input
			type="text"
			v-model="value"
			@keyup.enter="emitInputValue"
			class="flex-1 p-2 text-base border border-gray-300 rounded capitalize text-black"
			:placeholder="placeholder"
		/>
		<button
			v-if="hasSearch"
			@click="emitInputValue"
			class="ml-2 text-base bg-transparent border-none cursor-pointer"
		>
			<span>🔍</span>
		</button>
	</div>
</template>

<script setup lang="ts">
	const emit = defineEmits(['search']);
	const props = defineProps({
		hasSearch: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: 'Search...',
		},
		defaultValue: {
			type: String,
			default: '',
		},
	});

	let value = ref('');

	if (props.defaultValue) {
		value.value = props.defaultValue;
	}

	const emitInputValue = () => {
		if (value.value) {
			emit('search', value.value);
		}
	};
</script>
