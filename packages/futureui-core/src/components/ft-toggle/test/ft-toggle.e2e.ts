import { newE2EPage } from '@stencil/core/testing';

describe('ft-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ft-toggle></ft-toggle>');

    const element = await page.find('ft-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
