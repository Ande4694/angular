import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  login(username, password) {
    element(by.id('home-login')).click();
    // browser.sleep(2000);
    element(by.id('username-input')).sendKeys(username);
    element(by.id('password-input')).sendKeys(password);
    element(by.id('login-button')).click();
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
