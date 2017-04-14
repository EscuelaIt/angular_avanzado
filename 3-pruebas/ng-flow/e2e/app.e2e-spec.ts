import { NgFlowPage } from './app.po';

describe('ng-flow App', () => {
  let page: NgFlowPage;

  beforeEach(() => {
    page = new NgFlowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ab works!');
  });
});
