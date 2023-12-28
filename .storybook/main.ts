import type { StorybookConfig } from '@storybook/web-components-vite'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-storysource',
			loaderOptions: {
				prettierConfig: { printWidth: 80, singleQuote: false },
				parser: 'typescript'
			}
		},
		{
			name: '@storybook/addon-docs',
			options: {
				sourceLoaderOptions: {
					injectStoryParameters: false
				}
			}
		}
	],
	framework: {
		name: getAbsolutePath('@storybook/web-components-vite'),
		options: {}
	},
	docs: {
		autodocs: 'tag',
		defaultName: 'Documentation'
	}
}
export default config
