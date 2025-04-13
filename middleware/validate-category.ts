export default defineNuxtRouteMiddleware((to) => {
	const allowed = ['movies', 'tv-series'];
	if (!allowed.includes(to.params.category as string)) {
		return abortNavigation(); // triggers Nuxt 3's 404 page
	}
});
