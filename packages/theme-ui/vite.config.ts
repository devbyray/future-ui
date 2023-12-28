import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default defineConfig({
	build: {
		manifest: true,
		minify: false,
		reportCompressedSize: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: {
				lib: resolve(__dirname, 'src/lib.ts'),
				accordion: resolve(__dirname, 'src/components/accordion/index.ts')
			},
			name: 'core-ui',
			// the proper extensions will be added
			formats: ['cjs', 'es']
		},
		rollupOptions: {
			plugins: [
				typescriptPaths({
					preserveExtensions: true
				}),
				typescript({
					sourceMap: false,
					declaration: true,
					outDir: 'dist'
				})
			]
		}
	},
	plugins: [dts()]
})
