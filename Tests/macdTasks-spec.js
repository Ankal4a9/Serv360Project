var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');

const { ExpectedConditions } = require('protractor');
const { first } = require('lodash');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('MACD Tasks Test cases', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.macdLogin('akhil.t@gmail.com','123456');
    await browser.sleep(3000);
});

 it('Create Tasks Request ',async function(){
    
    expect(await objet.createRequest.isPresent()).toBe(true);
    expect(await objet.taskButton.isEnabled()).toBe(true);
    await browser.sleep(2000);
    await objet.createRequest.click();
    await browser.sleep(1000);
    expect(await objet.macdSubmit.isEnabled()).toBe(false);
    await objet.macdPartner.get(1).click();
    await browser.sleep(1000);
    await objet.macdClient.get(1).click();
    await browser.sleep(3000);
    await objet.macdDevices.get(2).click();
    await browser.sleep(1000);
    await objet.macdOem.get(2).click();
    await browser.sleep(1000);
    await objet.macdRequestType.get(1).click();
    await browser.sleep(2000);
    await objet.macdSubject.sendKeys('Request for create task');
    await browser.sleep(1000);
    await objet.macdTextArea.sendKeys('Task description');
    await browser.sleep(1000);
    await objet.macdSubmit.click();
    await browser.sleep(6000); 

 });

 it('LogOut from user account',async function(){

    browser.actions().mouseMove(await objet.userMenu).click().perform();
    await browser.sleep(1000);
    browser.actions().mouseMove(await objet.logOutButton).click().perform();
    await browser.sleep(4000);

 });

 it('Login into Manager Account',async function(){

    
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

 it('LogOut from Manager account',async function(){

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
      expect(await objet.tasks.isPresent()).toBe(true);
      await objet.tasks.click();
      await objet.allTasks.click();
      await browser.sleep(3000);
      expect(await element(by.xpath('//*[@id="employee-grid"]/tbody')).all(by.tagName('tr')).get(1).all(by.tagName('td')).get(6).getText()).toEqual('akhil t');      //await browser.sleep(3000);
      await browser.sleep(3000);

 });

});