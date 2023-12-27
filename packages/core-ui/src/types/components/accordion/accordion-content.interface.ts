export interface iAccordionContent {
	expanded: boolean
	ariaExpanded: boolean

	toggle(): void
	expand(): void
	collapse(): void
}
