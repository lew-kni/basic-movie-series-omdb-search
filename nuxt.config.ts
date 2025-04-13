export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	modules: ['@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});
