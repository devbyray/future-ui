import { newSpecPage } from '@stencil/core/testing';
import { FtToolbar } from '../ft-toolbar';

describe('ft-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FtToolbar],
      html: `<ft-toolbar></ft-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <ft-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ft-toolbar>
    `);
  });
});
