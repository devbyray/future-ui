export class BaseComponent extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	getShadowRoot(): ShadowRoot | null {
		return this.shadowRoot ?? null
	}
}
