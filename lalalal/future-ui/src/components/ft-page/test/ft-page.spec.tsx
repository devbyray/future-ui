import { newSpecPage } from '@stencil/core/testing';
import { FtPage } from '../ft-page';

describe('ft-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FtPage],
      html: `<ft-page></ft-page>`,
    });
    expect(page.root).toEqualHtml(`
      <ft-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ft-page>
    `);
  });
});
