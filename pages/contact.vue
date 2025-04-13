<template>
	<div class="page-container text-white">
		<Hero
			title="Contact Us"
			subtitle="Are we missing your favourite Movie or TV series?<br/>Or simply have some feedback? We'd be happy to hear from you!"
			class="pt-12"
		></Hero>
		<div class="mt-16 px-4">
			<form class="max-w-sm mx-auto">
				<div class="mb-5">
					<label for="name" class="block mb-2 text-sm font-medium text-white">
						Your Name
					</label>
					<input
						type="name"
						id="name"
						class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
						placeholder="Lew Knight"
						required
					/>
				</div>
				<div class="mb-5">
					<label for="email" class="block mb-2 text-sm font-medium text-white">
						Your email
					</label>
					<input
						type="email"
						id="email"
						class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
						placeholder="name@flowbite.com"
						required
					/>
				</div>

				<div class="mb-5">
					<label
						for="message"
						class="block mb-2 text-sm font-medium text-white"
					>
						Your message
					</label>
					<textarea
						id="message"
						rows="4"
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Leave a comment..."
					></textarea>
				</div>
				<div class="flex items-center mb-4">
					<input
						id="checkbox-1"
						type="checkbox"
						value=""
						required
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label for="checkbox-1" class="ms-2 text-sm font-medium text-white">
						I agree to the
						<a href="#" class="text-pink-500 hover:underline">
							terms and conditions
						</a>
						.
					</label>
				</div>
				<button
					type="submit"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
	const routeObj = useRoute();
	const route = computed(() => routeObj);
</script>

<style scoped></style>
