import { defineNuxtPlugin } from '#app'
import { defineCustomElement } from '@devbyray/futureui/dist/components/hydrate'

export default defineNuxtPlugin(async () => {
	await defineCustomElement(window)
})
