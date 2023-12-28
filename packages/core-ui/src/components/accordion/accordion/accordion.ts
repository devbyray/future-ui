import type { CoreAccordionItem } from '../item/accordion-item'
import { iAccordionItemEmit } from '../../../types'
import { BaseComponent } from '../../base.component'

export class CoreAccordion extends BaseComponent {
	static observedAttributes = ['allow-multiple']

	private items: CoreAccordionItem[] = []
	private allowMultiple: boolean = false
	itemSelector: string = 'fu-core-accordion-item'

	constructor() {
		super()
		const template = document.createElement('template')
		template.innerHTML = `
			<style>
				:host {
					display: block;
				}
			</style>
			<slot></slot>
		`
		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
	}

	connectedCallback() {
		this.init()
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'allow-multiple' && oldValue === newValue) return
		this.init()
	}

	init(): void {
		this.allowMultiple = this.getAttribute('allow-multiple') === 'true'

		// Obtain a reference to the child component(s)
		const childComponents = this.querySelectorAll(this.itemSelector)
		const component = this
		// Add event listeners to the child component(s)
		childComponents.forEach(childComponent => {
			childComponent.addEventListener('accordionToggle', (event: Event) => {
				event.preventDefault()
				const customEvent = event as CustomEvent<iAccordionItemEmit>
				const element = customEvent.detail.element as CoreAccordionItem
				if (!component.allowMultiple) {
					component.resetOtherItems(element)
				}
			})
		})
	}

	getItems(): CoreAccordionItem[] {
		if (this.items.length > 0) return this.items
		const items = this.querySelectorAll(this.itemSelector) as unknown as CoreAccordionItem[]
		this.items = items
		return this.items
	}

	resetOtherItems(element: CoreAccordionItem): void {
		if (!element) return
		this.getItems().forEach(async item => {
			const isItemActive = item !== element
			if (isItemActive) {
				item.collapse()
			}
		})
	}
}
