import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ft-container',
  styleUrl: 'ft-container.css',
  shadow: true,
})
export class FtContainer {
  render() {
    return (
      <Host>
        <div class="p-4">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
