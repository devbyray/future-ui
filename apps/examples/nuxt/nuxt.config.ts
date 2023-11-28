// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	plugins: [
		// vue({
		// 	template: {
		// 		compilerOptions: {
		// 			// treat all tags with a dash as custom elements
		// 			isCustomElement: tag => tag.includes('-')
		// 		}
		// 	}
		// }),
		// vueJsx()
	],
	vue: {
		compilerOptions: {
			isCustomElement: tag => tag.startsWith('ft-')
		}
	}
})
