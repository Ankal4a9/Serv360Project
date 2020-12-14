var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');

const { ExpectedConditions } = require('protractor');
const { first } = require('lodash');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('MACD Auto Update User Request', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.macdLogin('mallika@123.com','123456');
    await browser.sleep(3000);
});

 it('Auto Update user field Validations ',async function(){
    
    expect(await objet.createRequest.isPresent()).toBe(true);
    await browser.sleep(2000);
    await objet.createRequest.click();
    await browser.sleep(1000);
    expect(await objet.macdSubmit.isEnabled()).toBe(true);   
    await objet.macdSubmit.click();
    await browser.sleep(2000);
    expect(await objet.errorValidations.get(0).getText()).toEqual('This is a required field');
    expect(await objet.errorValidations.get(1).getText()).toEqual('Please select a request type');
    await browser.sleep(1000);
    await objet.workPhone.sendKeys('786954312');
    await objet.macdRequestTypes.get(2).click();
    await browser.sleep(2000);
    await objet.macdOem.get(1).click();
    await objet.macdTechnologies.get(1).click();
    await objet.requestSubType.get(1).click();
    await browser.sleep(15000);
    await objet.macdSubmit.click();
    await browser.sleep(2000);
    expect(await objet.errorValidations.get(0).getText()).toEqual('Please select a user Id');
    expect(await objet.errorValidations.get(1).getText()).toEqual('Please enter last name');
    await objet.userFirstName.clear();
    await objet.userFirstName.sendKeys('angle');
    await objet.userLastName.clear();
    await objet.userLastName.sendKeys('T');
    await objet.userIdDropDown.get(2).click();
    await objet.deviceAssociation.get(3).click();
    await objet.comments.clear();
    await objet.comments.sendKeys('Mallika new comments');
    await objet.macdSubmit.click();
    await browser.sleep(8000);
 
 });

 xit('LogOut from user account',async function(){

    browser.actions().mouseMove(await objet.userMenu).click().perform();
    await browser.sleep(1000);
    browser.actions().mouseMove(await objet.logOutButton).click().perform();
    await browser.sleep(4000);

 });


});