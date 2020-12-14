var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');

const { ExpectedConditions } = require('protractor');
const { first } = require('lodash');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('MACD Incidents Test cases', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.macdLogin('akhil.t@gmail.com','123456');
    await browser.sleep(3000);
});

it('Check the Required Fields Validations',async function(){

   await objet.createRequest.click();
   await browser.sleep(2000);
   await objet.macdRequestType.get(4).click();
   await browser.sleep(2000);
   await objet.macdSubmit.click();
   await browser.sleep(1000);
   expect(await objet.errorValidations.get(0).getText()).toEqual('Please select client');
   expect(await objet.errorValidations.get(1).getText()).toEqual('Please select device');

});

 it('Create incident Request ',async function(){
    
    //expect(await objet.createRequest.isPresent()).toBe(true);
    //expect(await objet.taskButton.isEnabled()).toBe(true);
    // browser.sleep(2000);
    await objet.macdPartner.get(1).click();
    await browser.sleep(1000);
    await objet.macdClient.get(1).click();
    await browser.sleep(3000);
    await objet.macdDevices.get(2).click();
    await browser.sleep(1000);
    await objet.macdOem.get(2).click();
    await browser.sleep(1000);
    await objet.macdImpact.get(2).click();
    await browser.sleep(1000);
    await objet.macdUrgency.get(1).click();
    await browser.sleep(2000);
    await objet.incidentSubject.sendKeys('Request for create task');
    await browser.sleep(1000);
    await objet.incidentDescription.sendKeys('Task description');
    await browser.sleep(1000);
    expect(await objet.macdSubmit.isEnabled()).toBe(true);
    await objet.macdSubmit.click();
    await browser.sleep(6000); 

 });

 it('Verify the Created Incidents',async function(){
    
      await objet.incidentButton.isPresent().then(async function(){
       expect(await objet.incidentButton.isEnabled()).toBe(true);
       //await objet.incidentButton.click();
       await browser.sleep(3000);

      });

 });

 it('LogOut from user account',async function(){

    browser.actions().mouseMove(await objet.userMenu).click().perform();
    await browser.sleep(1000);
    browser.actions().mouseMove(await objet.logOutButton).click().perform();
    await browser.sleep(4000);

 });

 xit('Login into Manager Account',async function(){

    
   await logIn.macdLogin('acctMng@mail.com','123456');
   await browser.sleep(3000);
    expect(await objet.approveAndReject.get(1).isPresent()).toBe(true);
    await objet.checkBoxes.isPresent().then(async function(){
       
         await objet.checkBox(0,0);
         await browser.sleep(3000);
    });

    await objet.approveAndReject.get(1).isPresent().then(async function(){
      await objet.approveAndReject.get(1).click();
      await browser.sleep(7000);

    });
   });

 xit('LogOut from Manager account',async function(){

      browser.actions().mouseMove(await objet.userMenu).click().perform();
      await browser.sleep(1000);
      browser.actions().mouseMove(await objet.logOutButton).click().perform();
      await browser.sleep(4000);
  
   });

  it('Login into Serv360 and verify the created ticket', async function(){
        
      await logIn.login('sidprtadmin@mail.com','123456');
      await browser.sleep(3000);
      await menu.selectMenuItems(1);
      await browser.sleep(2000);
      //await objet.tasksViews.click();
      //await browser.sleep(1000);
      expect(await objet.incidents.isPresent()).toBe(true);
      await objet.incidents.click();
      await objet.allIncidents.click();
      await browser.sleep(3000);
      expect(await element(by.xpath('//*[@id="employee-grid"]/tbody')).all(by.tagName('tr')).get(1).all(by.tagName('td')).get(4).getText()).toEqual('akhil t');      //await browser.sleep(3000);

 });

});