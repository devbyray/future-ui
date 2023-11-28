import { newE2EPage } from '@stencil/core/testing';

describe('ft-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ft-page></ft-page>');

    const element = await page.find('ft-page');
    expect(element).toHaveClass('hydrated');
  });
});
