import { BaseComponent } from '../base.component'

export class CoreDetailsAccordion extends BaseComponent {
	static observedAttributes = ['custom-icon', 'allow-multiple']
	private customIcon: string | null = null
	private allowMultiple: boolean = false

	constructor() {
		super()

		const template = document.createElement('template')
		template.innerHTML = `
        <style>
        :host {
                display: block;
            }
            :host details summary {
                background: red;
            }
        </style>
        <section>
            <slot></slot>
        </section>
    `

		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
	}
	connectedCallback() {
		this.customIcon = this.getAttribute('custom-icon') ?? null
		this.allowMultiple = this.getAttribute('allow-multiple') === 'true' ? true : false
		;[...this.children].forEach(child => {
			if (child.nodeName.toLowerCase() !== 'details') {
				console.group('Wrong element found in fu-core-details-accordion')
				console.warn('fu-core-details-accordion only accepts <details> as children')
				console.warn(child)
				console.groupEnd()
				return
			}
			child.classList.add('fu-core-details-accordion-item')
			child.setAttribute('aria-expanded', 'false')

			const icon = child.querySelector('svg')
			if (this.customIcon && icon) {
				icon.setAttribute('aria-hidden', 'true')
			} else {
				console.group('Oops something is wrong with the icon')
				console.warn(
					"We found an svg in the summary, but you haven't set [custom-icon] attribute on  fu-core-details-accordion to true, or you have set the attribute, but haven't add the icon. Please check your code."
				)
				console.warn(child)
				console.groupEnd()
			}

			const summary = child.querySelector('summary')
			if (summary?.nextElementSibling?.tagName.toLowerCase() !== 'div') {
				console.group('Wrong element found in fu-core-details-accordion')
				console.warn('fu-core-details-accordion only accepts <div> as next sibling of <summary>')
				console.warn(child)
				console.groupEnd()
			} else {
				summary.nextElementSibling?.classList.add('fu-core-details-accordion-content')
			}
		})

		this.onclick = event => {
			const target = event.target as Element
			const details = target.closest('details')
			const summary = target.closest('summary')
			const contentEl = summary?.nextElementSibling
			const contentHeight = contentEl?.clientHeight

			contentEl?.animate(
				{
					height: ['0', `${contentHeight}px`]
				},
				{
					duration: 300,
					easing: 'ease-in-out'
				}
			)

			details?.setAttribute('aria-expanded', 'true')
			summary?.querySelector('svg')?.classList.toggle('open')
			;[...this.children].forEach(child => {
				if (!this.allowMultiple && !event.ctrlKey && child !== details) {
					child.toggleAttribute('open', false)
					child.setAttribute('aria-expanded', 'false')
					child.querySelector('svg')?.removeAttribute('class')
				}
			})
		}
	}
}
