import { newSpecPage } from '@stencil/core/testing';
import { FtToggle } from '../ft-toggle';

describe('ft-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FtToggle],
      html: `<ft-toggle></ft-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <ft-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ft-toggle>
    `);
  });
});
