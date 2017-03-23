import { OdataAppPage } from './app.po';

describe('odata-app App', () => {
  let page: OdataAppPage;

  beforeEach(() => {
    page = new OdataAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
