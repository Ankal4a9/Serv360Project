var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');

const { ExpectedConditions } = require('protractor');
const { first } = require('lodash');
const { async } = require('q');


let objet=new objects();
let logIn=new loginObj();

  browser.ignoreSynchronization=true;
  describe('MACD Auto Break Fix Request', function() {
 
  beforeAll(async function() {

       browser.waitForAngularEnabled(false);
       await logIn.macdLogin('mallika@123.com','123456');
       await browser.sleep(3000);
    });

  it('Auto Break Fix Request',async function(){
    
     await objet.createRequest.isPresent().then(async function(btn){
     
     if(btn){

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
        await objet.macdRequestTypes.get(7).click();
        await browser.sleep(4000);
        //await objet.macdOem.get(1).click();
        //await objet.macdTechnologies.get(1).click();
        // await objet.requestSubType.get(1).click();
        //await browser.sleep(5000);
        await objet.macdSubmit.click();
        await browser.sleep(1000);
        await objet.macdSubmit.click();
        await browser.sleep(2000);
        expect(await objet.errorValidations.get(0).getText()).toEqual('Please Enter Subject');
        expect(await objet.errorValidations.get(1).getText()).toEqual('Please Enter Description');
        await objet.breakfixSubject.sendKeys('Test Subject for Breakfix');
        await objet.macdDescription.sendKeys('Test Description for BreakFix');
        await objet.comments.sendKeys('auto Move request');
        await objet.macdSubmit.click();
        await browser.sleep(12000);
        console.log('Create Request Found And Break Fix Created');

      }
   else{
        console.log('No Create Request button Appear');
        await browser.console();
       }
    });
   
   });

  it('LogOut from user account',async function(){

      await objet.userMenu.isPresent().then(async function(logout){

      if(logout){
        
         browser.actions().mouseMove(await objet.userMenu).click().perform();
         await browser.sleep(1000);
         browser.actions().mouseMove(await objet.logOutButton).click().perform();
         await browser.sleep(4000);
         console.log('Logged Out Successfully')
      }
      else{
         console.log('No LogOut Button Appear');
         await browser.close();
        }
    });
   
   });

});