import { CoreAccordionItemOptions } from '../../../types'
import { BaseComponent } from '../../base.component'

export class CoreAccordionContent extends BaseComponent {
	private expanded: boolean = false

	constructor(options: CoreAccordionItemOptions) {
		super()

		const template = document.createElement('template')
		template.innerHTML = `
			<style>
				:host {
					${options?.style ?? ''}
					display: block;
					opacity: 0;
					height: 0;
					overflow: hidden;
					transition: all 0.3s ease-in-out;

					padding: var(--core-accordion-content-closed-padding);
					margin: var(--core-accordion-content-closed-margin);
					background-color: var(--core-accordion-content-closed-background-color);
				}

				:host([aria-expanded='true']) {
					${options?.style ?? ''}

					opacity: 1;
					height: min-content;
					transition: all 0.3s ease-in-out;

					padding: var(--core-accordion-content-open-padding);
					margin: var(--core-accordion-content-open-margin);
					background-color: var(--core-accordion-content-open-background-color);
				}
			</style>
			<slot></slot>
		`
		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
	}

	async toggle(): Promise<void> {
		if (this.expanded) {
			await this.collapse()
		} else {
			await this.expand()
		}
	}

	async expand(): Promise<void> {
		this.expanded = true
		this.updateAttributes()
	}

	async collapse(): Promise<void> {
		this.expanded = false
		this.updateAttributes()
	}

	private updateAttributes(): void {
		this.setAttribute('aria-expanded', this.expanded ? 'true' : 'false')
	}

	connectedCallback() {
		this.updateAttributes()
	}
}
