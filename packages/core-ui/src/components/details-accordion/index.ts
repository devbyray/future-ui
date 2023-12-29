import { BaseComponent } from '../base.component'

export class CoreDetailsAccordion extends BaseComponent {
	constructor() {
		super()

		const template = document.createElement('template')
		template.innerHTML = `
        <style>
            :host {
                display: block;
            }
            summary {
                cursor: pointer;
            }
        </style>
        <section>
            <slot></slot>
        </section>
    `
		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
	}
	connectedCallback() {
		;[...this.children].forEach(child => {
			console.log('child', child)
			child.setAttribute('aria-expanded', 'false')
		})

		this.onclick = event => {
			const target = event.target as Element
			const details = target.closest('details')
			details?.setAttribute('aria-expanded', 'true')
			;[...this.children].forEach(child => {
				if (!event.ctrlKey && child !== details) {
					child.toggleAttribute('open', false)
					child.setAttribute('aria-expanded', 'false')
				}
			})
		}
	}
}
