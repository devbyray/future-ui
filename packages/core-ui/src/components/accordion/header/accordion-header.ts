import { BaseComponent } from '../../base.component'

export class CoreAccordionHeader extends BaseComponent {
	private open: boolean = false

	constructor() {
		super()

		const template = document.createElement('template')
		template.innerHTML = `
<style>
.core-accordion-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	gap: 1rem;
}
.core-accordion-header-icon {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
svg {
	width: 16px;
	transition: all 0.3s ease-in-out;
}
svg.open {
	transform: rotate(180deg);
}

</style>
<div class="core-accordion-header">
	<div class="core-accordion-header-content">
		<slot></slot>
	</div>
	<div class="core-accordion-header-icon">
		<svg width="16" height="10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="m8.425 9.355 7.399-7.34a.6.6 0 0 0 0-.849l-.99-.99a.6.6 0 0 0-.85 0L8 6.1 2.016.176a.6.6 0 0 0-.85 0l-.99.99a.6.6 0 0 0 0 .85l7.4 7.339a.6.6 0 0 0 .849 0z" />
		</svg>
	</div>
</div>
		`
		super.getShadowRoot()?.appendChild(template.content.cloneNode(true))
	}

	async toggle() {
		this.open = !this.open
		this.updateIconClass()
	}

	async collapse() {
		this.open = false
		this.updateIconClass()
	}

	async expand() {
		this.open = true
		this.updateIconClass()
	}

	private updateIconClass() {
		super.getShadowRoot()?.querySelector('svg')?.classList.toggle('open', this.open)
	}
}
