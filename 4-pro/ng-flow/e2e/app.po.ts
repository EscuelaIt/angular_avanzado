import { browser, element, by } from 'protractor';

export class NgFlowPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ab-home')).getText();
  }
}
