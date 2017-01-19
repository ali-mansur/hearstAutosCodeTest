import { CodechallangePage } from './app.po';

describe('codechallange App', function() {
  let page: CodechallangePage;

  beforeEach(() => {
    page = new CodechallangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
