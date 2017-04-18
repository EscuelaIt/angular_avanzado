import { NewPage } from './new.po';
import { NgFlowPage } from './app.po';

describe('ng-flow App', () => {
  let page: NgFlowPage;
  let newPage: NewPage;

  beforeEach(() => {
    page = new NgFlowPage();
    newPage = new NewPage();
  });

  it('should display message saying Hello!! Angular is amazing.', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello!! Angular is amazing.');
  });

  it('should create operation', () => {
    newPage.navigateTo();
    newPage.createOperation();
    newPage.isFormValid().then(r => expect(r).toEqual('true'))
  });

});
