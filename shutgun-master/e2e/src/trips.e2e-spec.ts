import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('Trip tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  // 1.0: A simple test
  // 1.1: ...
  // 1.2:  ...

  it('1.0: should test that e2e works (simplest test)', () => {
    // Arrange (may be empty)
    // Act
    // Assert
    browser.get('');
    element(by.id('home-login')).click();
    expect(element(by.css('h1')).getText()).toEqual('Login');
    
    //write code to log in.

    // more code here

    expect(true).toBeTruthy();
  });

  // it('should ', () => {

  //   expect()
  // });

  it('should create new trip', () => {
    browser.get('');
    
    page.login('username', 'password');

    element(by.id('findalift-button')).click();

    element.all(by.css('.example-card')).then((el) => {
      const before = el.length; // eg before = 3
      element(by.id('registertrip-button')).click();
      element(by.css('input[formControlName=origin]')).sendKeys('Gentofte');
      element(by.css('input[formControlName=destination]')).sendKeys('Copenhagen');
      element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
      element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10-05');
      // browser.sleep(3000);
      element(by.id('registerTrip')).click();
      
      // browser.sleep(3000);
      element.all(by.css('.example-card')).then((el2) => {
        const after = el2.length; // eg after = 4

        expect(before + 1).toEqual(after);
      });
    });
  });
  // expects to be after this test...



  it('should delete a lift/trip', () => {
    element.all(by.css('.example-card')).then((elements) => {
      const trips = elements.length;
      element.all(by.css('.delete-button')).get(1).click();
      element.all(by.css('.example-card')).then((elementsAfter) => {
        expect(trips).toEqual(elementsAfter.length + 1);
      });
    });
  });


});

