import { newE2EPage } from '@stencil/core/testing';

describe('ft-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ft-container></ft-container>');

    const element = await page.find('ft-container');
    expect(element).toHaveClass('hydrated');
  });
});
