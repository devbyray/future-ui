import type { Meta, StoryObj } from '@storybook/web-components'
import '../../index.css'
import './accordion.css'
import '../../../components/accordion/elements'

import { html } from 'lit'

type Args = {
	allowMultiple?: boolean
	customStyle?: string
}

const meta: Meta<Args> = {
	title: 'Core/Accordion',
	component: 'fu-core-accordion',
	// tags: ['autodocs'],
	argTypes: {
		allowMultiple: {
			description:
				'Allow multiple accordion items to be open at the same time. Defaults to false. If true, the accordion will allow multiple items to be open at the same time. If false, or the attribute is not there, the accordion only allows one item open at a time.',
			defaultValue: 'false',
			control: {
				type: 'boolean'
			}
		}
	},
	render: ({ allowMultiple }) => html`
		<fu-core-accordion allow-multiple="${allowMultiple}">
			<fu-core-accordion-item>
				<fu-core-accordion-header><h2>Accordion Header 1</h2></fu-core-accordion-header>
				<fu-core-accordion-content>Accordion Content 1</fu-core-accordion-content>
			</fu-core-accordion-item>
			<fu-core-accordion-item>
				<fu-core-accordion-header><h2>Accordion Header 2</h2></fu-core-accordion-header>
				<fu-core-accordion-content>Accordion Content 2</fu-core-accordion-content>
			</fu-core-accordion-item>
			<fu-core-accordion-item>
				<fu-core-accordion-header><h2>Accordion Header 3</h2></fu-core-accordion-header>
				<fu-core-accordion-content>Accordion Content 3</fu-core-accordion-content>
			</fu-core-accordion-item>
			<fu-core-accordion-item>
				<fu-core-accordion-header><h2>Accordion Header 4</h2></fu-core-accordion-header>
				<fu-core-accordion-content>Accordion Content 4</fu-core-accordion-content>
			</fu-core-accordion-item>
		</fu-core-accordion>
	`
}

export default meta
type Story = StoryObj<Args>

export const OneOpen: Story = {
	args: {
		allowMultiple: false
	}
}

export const MultipleOpen: Story = {
	args: {
		allowMultiple: true
	}
}
