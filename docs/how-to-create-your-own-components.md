# How to create your own components

With the @futureui/core-ui you can build your own styleable components. The core is purely build so you can get the functionality and accessibility for free, but you can style them with CSS custom properties.

## Modes
There are 2 modes which you can use to build components.

1. Bring your styling and use the core components
2. Create your own custom elements


### Bring your styling and use the core components

If you just want to use the @futureui/core-ui components and add your styling yourself, that is no problem at. That is something we facilitate.

Follow these steps and you will be fine: [accordion component documentation](../packages/core-ui/src/components/accordion/README.md)


### Create your own custom elements

We can imagine that you want to have your own custom elements, well we support that. Better said, that's the whole purpose this component library is build like it is.

We have created an example of how to extend our components, check the [theme-ui package](../packages/theme-ui/src/components/accordion/accordion/accordion.ts).

If we take a look at the accordion component, it looks like this: 

```ts
import { CoreAccordion } from '@futureui/core-ui/accordion'

export class ThemeAccordion extends CoreAccordion {
	constructor() {
		super()
		this.itemSelector = 'fu-theme-accordion-item'
	}
}
```

You create a new class and extend it from our `CoreAccordion` component. In this case you give your custom item selector (this is purely for the internal logic). You do the same for the [accordion-header](../packages/theme-ui/src/components/accordion/header/accordion-header.ts), [accordion-item]((../packages/theme-ui/src/components/accordion/item/accordion-item.ts)) and [accordion-content]((../packages/theme-ui/src/components/accordion/content/accordion-content.ts)) components.

Before you can use your own components in your website or webapp, you have to define them as custom elements like this:

```ts
import { ThemeAccordion, ThemeAccordionContent, ThemeAccordionHeader, ThemeAccordionItem } from './components/accordion'

customElements.define('fu-theme-accordion', ThemeAccordion)
customElements.define('fu-theme-accordion-item', ThemeAccordionItem)
customElements.define('fu-theme-accordion-header', ThemeAccordionHeader)
customElements.define('fu-theme-accordion-content', ThemeAccordionContent)
```

You are fully in control on how to name your components 👍.

## Questions?
Please [create an issue](https://github.com/devbyray/future-ui/issues/new) in our repo and we love to help you out.


