import { CoreAccordionContent } from '@fui/core-ui/accordion'

export class ThemeAccordionContent extends CoreAccordionContent {
	constructor() {
		super({
			style: `
					--core-accordion-content-closed-padding: 0;
					--core-accordion-content-open-padding: 0 0;

					--core-accordion-content-closed-margin: 0;
					--core-accordion-content-open-margin: 0;

					--core-accordion-content-open-background-color: transparent;
					--core-accordion-content-closed-background-color: transparent;

			`
		})
	}
}
