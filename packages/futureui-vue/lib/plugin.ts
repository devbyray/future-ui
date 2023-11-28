import { Plugin } from 'vue'
import { applyPolyfills, defineCustomElements } from '@devbyray/futureui/loader'

export const ComponentLibrary: Plugin = {
	async install() {
		applyPolyfills().then(() => {
			defineCustomElements()
		})
	}
}
