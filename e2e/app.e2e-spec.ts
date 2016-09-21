import { FirstAng2ProjectPage } from './app.po';

describe('first-ang2-project App', function() {
  let page: FirstAng2ProjectPage;

  beforeEach(() => {
    page = new FirstAng2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
