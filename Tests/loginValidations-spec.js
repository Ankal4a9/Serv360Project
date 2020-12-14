var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');

const { ExpectedConditions, element } = require('protractor');
const { first } = require('lodash');


let objet=new objects();
let logIn=new loginObj();

browser.ignoreSynchronization=true;
describe('MACD Tasks Test cases', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await browser.get('https://demo.seismic360.com/login');
    await browser.sleep(3000);

});

 it('check the login field validations ',async function(){
    
    expect(await objet.loginButton.isPresent()).toBe(true);
    await objet.usernameTextBox.clear();
    await objet.loginButton.click();
    await browser.sleep(1000);
    expect(await objet.loginValidations.get(0).getText()).toEqual('Username is required.');
    expect(await objet.loginValidations.get(1).getText()).toEqual('Password is required.');
    await objet.usernameTextBox.sendKeys('hkjhfgdf');
    await objet.passwordTextBox.sendKeys('789274');
    await objet.loginButton.click();
    await browser.sleep(3000);
    expect(await element(by.id('errorLoginMessage')).getText()).toEqual('Please enter correct Email and password');
 });


});