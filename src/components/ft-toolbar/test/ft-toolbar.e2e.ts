import { newE2EPage } from '@stencil/core/testing';

describe('ft-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ft-toolbar></ft-toolbar>');

    const element = await page.find('ft-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
