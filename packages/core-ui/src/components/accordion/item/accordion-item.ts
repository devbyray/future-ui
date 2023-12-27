import { BaseComponent } from '../../base.component'
import { CoreAccordionContent, CoreAccordionHeader } from '../'
import { CoreAccordionItemOptions } from '../../../types'

export class CoreAccordionItem extends BaseComponent {
	private expanded: boolean = false
	private contentEl: CoreAccordionContent | null = null
	private headerEl: CoreAccordionHeader | null = null
	contentSelector: string = 'fu-core-accordion-content'
	headerSelector: string = 'fu-core-accordion-header'

	constructor(options: CoreAccordionItemOptions) {
		super()
		this.initElements(options)
	}

	connectedCallback() {
		this.addEventListener('click', this.handleClick)
	}

	disconnectedCallback() {
		this.removeEventListener('click', this.handleClick)
	}

	private initElements(options: CoreAccordionItemOptions) {
		this.contentSelector = options?.contentSelector ?? 'fu-core-accordion-content'
		this.headerSelector = options?.headerSelector ?? 'fu-core-accordion-header'
		const template = document.createElement('template')
		template.innerHTML = `
			<style>
				:host {
					${options?.style ?? ''}
					display: block;
					margin: var(--core-accordion-item-margin, 0);
					padding: var(--core-accordion-item-padding, 0);
					background-color: var(--core-accordion-item-background-color, transparent);
					border-radius: var(--core-accordion-item-border-radius, 0);
					
					border-top: var(--core-accordion-item-border-top, none);
					border-right: var(--core-accordion-item-border-right, none);
					border-bottom: var(--core-accordion-item-border-bottom, none);
					border-left: var(--core-accordion-item-border-left, none);
				}
				:host([aria-expanded='true']) {
					margin: var(--core-accordion-item-margin-open, 0);
					padding: var(--core-accordion-item-padding-open, 0);
					background-color: var(--core-accordion-item-background-color-open, transparent);
				}
				:host(:last-child) {
					border: none;
				}
			</style>
			<slot></slot>
		`
		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
		this.contentEl = this.querySelector(this.contentSelector) ?? null
		this.headerEl = this.querySelector(this.headerSelector) ?? null
	}

	async toggle(): Promise<void> {
		this.expanded = !this.expanded
		this.ariaExpanded = this.expanded ? 'true' : 'false'

		this.contentEl?.toggle()
		this.headerEl?.toggle()

		this.dispatchEvent(new CustomEvent('accordionToggle', { detail: { element: this } }))
	}

	async expand(): Promise<void> {
		// Implement expand logic
		this.expanded = true
		this.ariaExpanded = 'true'
		this.contentEl?.expand()
		this.headerEl?.expand()
	}

	async collapse(): Promise<void> {
		// Implement collapse logic
		this.expanded = false
		this.ariaExpanded = 'false'
		this.contentEl?.collapse()
		this.headerEl?.collapse()
	}

	private handleClick = () => {
		this.toggle()
	}
}
