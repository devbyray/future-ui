export interface iAccordionItem {
	el: HTMLElement

	/**
	 * Private elements are not allowed to be defined in an interface
	 */
	// #contentEl: HTMLElement | null

	expanded: boolean
	ariaExpanded: boolean
	toggle(): void
	expand(): void
	collapse(): void
	toggleEvent: CustomEvent<iAccordionItemEmit>

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

export interface iAccordionItemEmit {
	element: HTMLElement
}
