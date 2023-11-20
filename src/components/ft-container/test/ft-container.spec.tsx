import { newSpecPage } from '@stencil/core/testing';
import { FtContainer } from '../ft-container';

describe('ft-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FtContainer],
      html: `<ft-container></ft-container>`,
    });
    expect(page.root).toEqualHtml(`
      <ft-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ft-container>
    `);
  });
});
