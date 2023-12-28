import { CoreAccordionItem } from '@futureui/core-ui/accordion'

export class ThemeAccordionItem extends CoreAccordionItem {
	constructor() {
		const css = `
				--core-accordion-item-margin: 0 0 0 0;
				--core-accordion-item-margin-open: 0 0 0 0;

				--core-accordion-item-padding: 30px 0;
				--core-accordion-item-padding-open: 30px 0 0 0;

				--core-accordion-item-background-color: transparent;
				--core-accordion-item-background-color-open: transparent;

				--core-accordion-item-border-radius: 0;
				
				--core-accordion-item-border-top: none;
				--core-accordion-item-border-right: none;
				--core-accordion-item-border-bottom: 1px solid #e7e7e7;
				--core-accordion-item-border-left: none;
				
		`
		super({
			contentSelector: 'fu-theme-accordion-content',
			headerSelector: 'fu-theme-accordion-header',
			style: css
		})
	}
}
