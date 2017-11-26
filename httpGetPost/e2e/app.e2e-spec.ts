import { HttpGetPostPage } from './app.po';

describe('http-get-post App', () => {
  let page: HttpGetPostPage;

  beforeEach(() => {
    page = new HttpGetPostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
