import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: {
				lib: resolve(__dirname, 'src/lib.ts'),
				accordion: resolve(__dirname, 'src/components/accordion/index.ts')
			},
			name: 'coreporate-ui',
			// the proper extensions will be added
			formats: ['cjs', 'es']
		}
	}
})
