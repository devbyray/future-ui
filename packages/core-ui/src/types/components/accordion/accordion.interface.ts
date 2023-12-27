import { iAccordionItem } from './accordion-item.interface'

export interface iAccordion {
	el: HTMLElement

	items: iAccordionItem[]

	allowMultiple: boolean

	getItems(element: iAccordionItem): iAccordionItem[]

	resetOtherItems(element: iAccordionItem): void

	/**
	 * 6. Component lifecycle events
	 * Ordered by their natural call order, for example
	 * WillLoad should go before DidLoad.
	 * These methods are optional to implement
	 */
	connectedCallback?(): void
	disconnectedCallback?(): void
	componentWillLoad?(): void
	componentDidLoad?(): void
	componentShouldUpdate?(newVal: any, oldVal: any, propName: string): void
	componentWillUpdate?(): void
	componentDidUpdate?(): void
	componentWillRender?(): void
	componentDidRender?(): void
}
