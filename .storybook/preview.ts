import type { Preview } from '@storybook/web-components'
import DocumentationTemplate from './DocumentationTemplate.mdx'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		layout: 'centered',
		docs: {
			page: DocumentationTemplate,
			toc: true,
			transformSource(src) {
				const match = /^<template>(.*)<\/template>/.exec(src)
				if (match) {
					return match[1]
				}
				return src
			}
		}
	}
}

export default preview
