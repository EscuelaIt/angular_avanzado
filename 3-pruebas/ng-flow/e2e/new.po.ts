import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

export class NewPage {

  navigateTo() {
    return browser.get('/cash/new');
  }

  createOperation() {
    element(by.css('ab-input>section>input')).sendKeys('testing');
    element(by.css('button[type="submit"]')).click();
  }

  isFormValid() {
    return element(by.css('p[name="form-valid"]')).getText();
  }
}