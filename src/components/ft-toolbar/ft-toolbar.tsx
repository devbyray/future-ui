import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ft-toolbar',
  styleUrl: 'ft-toolbar.css',
  shadow: true,
})
export class FtToolbar {
  @Prop() text: string;

  render() {
    return (
      <Host>
        <header class="mb-8 bg-red-500 p-4">
          {this.text ? <h1>{this.text}</h1> : null}
          <slot></slot>
        </header>
      </Host>
    );
  }
}
