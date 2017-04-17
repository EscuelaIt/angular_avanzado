import { NgFlowPage } from './app.po';

describe('ng-flow App', () => {
  let page: NgFlowPage;

  beforeEach(() => {
    page = new NgFlowPage();
  });

  it('should display message saying Hello!! Angular is amazing.', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello!! Angular is amazing.');
  });
});
