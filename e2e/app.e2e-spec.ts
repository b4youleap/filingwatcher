import { FilingwatchPage } from './app.po';

describe('filingwatch App', function() {
  let page: FilingwatchPage;

  beforeEach(() => {
    page = new FilingwatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
