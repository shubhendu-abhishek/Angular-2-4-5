import { FirstNgAppPage } from './app.po';

describe('first-ng-app App', () => {
  let page: FirstNgAppPage;

  beforeEach(() => {
    page = new FirstNgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
