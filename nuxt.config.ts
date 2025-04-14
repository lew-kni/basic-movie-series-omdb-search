export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	ssr: true,
	nitro: {
		preset: 'static',
	},
	app: {
		baseURL: '/basic-movie-series-omdb-search/', // 👈 VERY important for GitHub Pages
	},
	modules: ['@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});
