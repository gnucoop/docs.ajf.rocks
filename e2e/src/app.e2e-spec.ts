import {browser, logging} from 'protractor';

import {AjfDocsAppPage} from './app.po';

describe('Material Docs App', () => {
  let page: AjfDocsAppPage;

  beforeEach(() => {
    page = new AjfDocsAppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Ajf');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
