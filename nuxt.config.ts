export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	ssr: true,
	target: 'static', // not required in Nuxt 3 but good to be explicit
	app: {
		baseURL: '/basic-movie-series-omdb-search/', // 👈 VERY important for GitHub Pages
	}
	modules: ['@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});
