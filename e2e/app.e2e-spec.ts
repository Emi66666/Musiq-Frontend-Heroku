import { MojKvartPage } from './app.po';

describe('moj-kvart App', function() {
  let page: MojKvartPage;

  beforeEach(() => {
    page = new MojKvartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
