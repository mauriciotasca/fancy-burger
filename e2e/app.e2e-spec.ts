import { AppPage } from './app.po';

describe('fancy-burger App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display brand title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Fancy Burger');
  });
});
