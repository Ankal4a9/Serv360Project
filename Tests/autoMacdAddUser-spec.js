var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');

const { ExpectedConditions } = require('protractor');
const { first } = require('lodash');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('MACD Auto create User Request', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.macdLogin('mallika@123.com','123456');
    await browser.sleep(3000);
});

 it('Auto Add user field Validations ',async function(){
    
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
    await objet.macdRequestTypes.get(1).click();
    await browser.sleep(2000);
    await objet.macdOem.get(1).click();
    await objet.macdTechnologies.get(1).click();
    await objet.requestSubType.get(1).click();
    await browser.sleep(8000);
    await objet.macdSubmit.click();
    await browser.sleep(2000);
    expect(await objet.errorValidations.get(0).getText()).toEqual('Please enter last name');
    expect(await objet.errorValidations.get(1).getText()).toEqual('Please enter user Id');
    await objet.userFirstName.sendKeys('Aravind');
    await objet.userLastName.sendKeys('T');
    await objet.userID.clear();
    await objet.userID.sendKeys('akhil@123.com');
    await objet.password.clear();
    await objet.password.sendKeys('123456');
    await objet.deviceAssociation.get(2).click();
    await objet.comments.sendKeys('Akhil new comments');
    await objet.macdSubmit.click();
    await browser.sleep(4000);

 });

 xit('LogOut from user account',async function(){

    browser.actions().mouseMove(await objet.userMenu).click().perform();
    await browser.sleep(1000);
    browser.actions().mouseMove(await objet.logOutButton).click().perform();
    await browser.sleep(4000);

 });


});