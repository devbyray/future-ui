import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ft-page',
  styleUrl: 'ft-page.css',
  shadow: true,
})
export class FtPage {
  render() {
    return (
      <Host>
        <div class="bg-gray-100 dark:bg-gray-700 dark:text-white min-h-[100vh]">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
