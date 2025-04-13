<template>
	<div class="flex flex-col min-h-screen bg-gray-800">
		<!-- Header -->
		<header
			class="text-white p-2 flex flex-row justify-between fixed top-0 left-0 right-0 z-10 from-gray-800 to-transparent bg-gradient-to-b"
		>
			<router-link :to="{ name: 'index' }">
				<img
					src="/public/assets/images/logo/sv_logo_pink_square@2x.png"
					width="75px"
					alt="Logo"
					class="inline-block mr-2 block sm:hidden"
				/>
				<img
					src="/public/assets/images/logo/sv_logo_pink_full@2x.png"
					width="230px"
					alt="Logo"
					class="inline-block mr-2 hidden sm:block"
				/>
			</router-link>
			<NavigationMain class="mt-5 sm:mr-5" />
		</header>

		<!-- Main Content -->
		<main class="flex-1">
			<slot />
		</main>

		<Footer />
	</div>
</template>

<script setup></script>

<style scoped></style>
