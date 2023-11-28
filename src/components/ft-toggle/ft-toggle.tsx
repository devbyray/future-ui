import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ft-toggle',
  styleUrl: 'ft-toggle.css',
  shadow: true,
})
export class FtToggle {
  @Element() el: HTMLElement;

  /**
   * The custom id
   */
  @Prop() customId: string;

  /**
   * The values
   *
   */
  @Prop() values: string[];

  /**
   * The custom value
   */
  @Prop({ mutable: true }) customValue: any = null;

  /**
   * The label name
   */
  @Prop() label: string;

  /**
   * The debug state
   * This will show a pre tag in the HTML to visualize the value
   */
  @Prop() debug: boolean = true;

  /**
   * The checked state
   * changes to it will trigger a rerender
   */
  @State() checked: boolean = false;

  @Event({
    eventName: 'toggleChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  toggleChange: EventEmitter<boolean>;

  toggleChangeHandler(value: boolean) {
    this.toggleChange.emit(value);
  }

  /**
   * Toggle the checked state
   */
  toggle() {
    this.checked = !this.checked;
    if (this.values) {
      // if there are values, toggle the `checked` state
      this.customValue = this.checked ? this.values[0] : this.values[1];
    } else {
      this.customValue = this.checked;
    }
    if (this.debug) console.log('toggle', this.customValue);
    this.toggleChangeHandler(this.customValue);
  }

  toggleClasses() {
    return {
      'toggle-item': true,
      'active': this.checked,
    };
  }

  toggleSvgClasses() {
    return {
      'inline-block': this.checked,
      'hidden': !this.checked,
    };
  }

  render() {
    return (
      <label htmlFor={this.customId} class="flex items-center">
        <span>{this.label}</span>
        <div class={`toggle-wrapper ${this.checked ? 'active' : ''}`}>
          <input id={this.customId} type="checkbox" class="input" onClick={this.toggle.bind(this)} />
          <div class={this.toggleClasses()}>
            <span>
              <svg class={`transition ease-in-out delay-400 ${!this.checked ? 'w-0 h-0 hidden' : ''}`} xmlns="http://www.w3.org/4000/svg" viewBox="0 0 50 50">
                <path class="toggle-svg" d="M40.267 14.628 20.974 33.921l-9.293-9.293a.999.999 0 1 0-1.414 1.414l10 10a.997.997 0 0 0 1.414 0l20-20a.999.999 0 1 0-1.414-1.414z" />
              </svg>
              <svg class={`transition ease-in-out delay-400 ${this.checked ? 'w-0 h-0 hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  class="toggle-svg"
                  d="M9.016 40.837a1.001 1.001 0 0 0 1.415-.001l14.292-14.309 14.292 14.309a1 1 0 0 0 1.416-1.413L26.153 25.129 40.43 10.836a1 1 0 1 0-1.415-1.413L24.722 23.732 10.43 9.423a1 1 0 1 0-1.415 1.413l14.276 14.293L9.015 39.423a1 1 0 0 0 .001 1.414z"
                />
              </svg>
            </span>
          </div>
        </div>
      </label>
    );
  }
}
