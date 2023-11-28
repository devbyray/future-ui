import { renderToString } from '@devbyray/futureui/components/hydrate'

export default defineNitroPlugin(nitroApp => {
	nitroApp.hooks.hook('render:response', async response => {
		response.body = (await renderToString(response.body)).html
	})
})
