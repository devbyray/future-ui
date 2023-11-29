import { defineNuxtPlugin } from '#app'
import { defineCustomElement } from '@devbyray/futureui-vue/dist'

export default defineNuxtPlugin(async () => {
	await defineCustomElement(window)
})
