import { Ng4DataDownActionsUpPage } from './app.po';

describe('ng4-data-down-actions-up App', () => {
  let page: Ng4DataDownActionsUpPage;

  beforeEach(() => {
    page = new Ng4DataDownActionsUpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
