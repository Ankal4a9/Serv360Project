var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');

const { ExpectedConditions, element } = require('protractor');
const { first } = require('lodash');
const { async } = require('q');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('Tasks Test cases', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.login('sidprtadmin@mail.com','123456');
    await browser.sleep(3000);
  });

 it('Naviagte to Tasks Module',async function(){
    
     await objet.tasksViews.isPresent().then(async function(view){

       if(view){
        await objet.tasksViews.click();
        await browser.sleep(1000);
        expect(await objet.tasks.isPresent()).toBe(true);
        await objet.tasks.click();
        await browser.sleep(2000);
        console.log('tasks View found')
       }
       else{
         console.log('No tasks View found')
       }
      });
    });

   it('Crate task required Field Validations',async function(){
    
         expect(await objet.createTasks.isPresent()).toBe(true);
         await objet.createTasks.click();
         await browser.sleep(4000);

      await objet.taskSubmit.isPresent().then(async function(submit){
        if(submit){
          await objet.taskSubmit.click();
          await browser.sleep(2000);
          expect(await objet.errorValidations.get(0).getText()).toEqual('This is a required field');
          expect(await objet.errorValidations.get(1).getText()).toEqual('This is a required field');
          expect(await objet.errorValidations.get(2).getText()).toEqual('Subject is required');
          console.log('Create task button Found');

            }
        else{
          console.log('No Create task button Found');
           }        
       });

     });

     it ('Add New Task',async function() {
    
         await objet.taskPartneroptions.get(2).click();
         await browser.sleep(2000);
         await objet.taskClientoptions.get(1).click();
         await browser.sleep(2000);
         //Child window close 
         var winHandles=browser.getAllWindowHandles();
         winHandles.then(function(handles) 
        {
        var parentWindow=handles[0];
        var popUpWindow=handles[1];
        browser.switchTo().window(popUpWindow);
        browser.switchTo().window(parentWindow);
        });
        await browser.sleep(2000);
        await objet.taskClientLocationoptions.get(1).click();
        await browser.sleep(2000);
        await objet.taskDevicesoptions.get(1).click();
        await browser.sleep(2000);
        await objet.taskDeviceTypesoptions.get(1).click();
        await browser.sleep(2000);
        await objet.requestTypeoptions.get(5).click();
        await browser.sleep(2000);
        await objet.taskAssignTooptions.get(1).click();
        await objet.taskSubject.sendKeys('Automatic Task Subject');
        await browser.sleep(2000);
        await objet.taskdescription.click();
        await browser.sleep(1000);
        await objet.taskdescription.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.actions().mouseMove( objet.taskdescription.sendKeys('Automatic Task description')).perform()
        await browser.sleep(2000);
        expect(await objet.taskSubmit.isPresent()).toBe(true);
        await objet.taskSubmit.click();
        await browser.sleep(2000);
        //  expect(await objet.firstName.isPresent()).toBe(true);
        //  await objet.firstName.sendKeys('Akhil');
        //  await objet.lastName.sendKeys('Torlapati');
        // await objet.phone.sendKeys('9876543221');
        //  await objet.cubicle.sendKeys('HG5673');
        //  await objet.changeRequest.get(1).click();
        //   await browser.sleep(500);
        //// await objet.requiredByDate.click();
        //   await browser.sleep(1000);
        // browser.actions().mouseMove(await objet.calenderNext).perform();
        // await objet.calenderNext.click();
        //await browser.sleep(500);
        //  await objet.dateTimePicker(3,2);
    
        await objet.conformationOkPopup.click();
        await browser.sleep(3000);

      });

    it('Activity fields required Validations',async function(){
     
           await objet.tasksList(1, 0);
           await browser.sleep(2000);
           await objet.taskAddActivity.get(1).click();
           await browser.sleep(2000);
           await objet.activitySave.isPresent().then(async function(){
           await objet.activitySave.click();
           await browser.sleep(2000);
           expect(await objet.errorValidations.get(0).getText()).toEqual('Start time is required');
           expect(await objet.errorValidations.get(1).getText()).toEqual('End time is required');
  
       });

    });

    it ('Add Activities', async function() {

           expect(await objet.startdate.isPresent()).toBe(true);
           await objet.startdate.click();
           await browser.sleep(2000);
           await element(by.xpath('/html/body/div[6]/div[1]/div[1]/button[3]')).click();
           await browser.sleep(3000);
           await objet.datepicker('/html/body/div[6]/div[1]/div[2]/table',3, 4);
           await browser.sleep(3000);
           await objet.taskActivityNotes.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await browser.actions().mouseMove(objet.taskActivityNotes.sendKeys('Task new note')).perform();
           await browser.sleep(2000);
           await objet.enddate.click();
           await browser.sleep(2000);
           await element(by.xpath('/html/body/div[7]/div[1]/div[1]/button[3]')).click();
           await browser.sleep(3000);
           await  objet.datepicker('/html/body/div[7]/div[1]/div[2]/table',3, 5);
           await browser.sleep(1000);
           await objet.activityTypeoptions.get(5).click();
           await browser.sleep(2000);
           await objet.taskInternalComments.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
           await browser.actions().mouseMove( objet.taskInternalComments.sendKeys('Test Add activity Internal Comments')).perform();
           await browser.sleep(2000);
           await objet.activitySave.click();
           await browser.sleep(2000);
          //Aler pop-up close
           await browser.switchTo().alert().accept();
           await browser.sleep(5000);
           await objet.conformationOkPopup.click();
           await browser.sleep(2000);
       });

    it ('Edit Activity', async function(){
    
          //await objet.tasksList(1, 0);
          //await browser.sleep(2000);
           await objet.taskAddActivity.get(2).click();
           await browser.sleep(4000);
       await objet.activityEdit.get(0).isPresent().then(async function(edit){

         if(edit){
          
           await objet.activityEdit.get(0).click();
           await browser.sleep(2000);
           await objet.startdate.click();
           await browser.sleep(2000);
           await objet.datepicker('/html/body/div[12]/div[1]/div[2]/table',4, 2);
           await browser.sleep(1000);
           browser.actions().mouseMove(await objet.startdate).click().perform();
           await browser.sleep(2000);
           await objet.enddate.click();
           await browser.sleep(2000);
           await objet.datepicker('/html/body/div[13]/div[1]/div[2]/table',4, 3);
           await browser.sleep(1000);
          //  await page2.ActivityTypeoptions.get(7).click();
           browser.actions().mouseMove(await objet.enddate).click().perform();
           await browser.sleep(2000);
           expect(await objet.activityUpdate.isPresent()).toBe(true);
           await browser.sleep(2000);
           await objet.activityUpdate.click();
           await browser.sleep(2000);
          //Aler pop-up close
           await browser.switchTo().alert().accept();
           await browser.sleep(3000);
           await objet.conformationOkPopup.click();
           await browser.sleep(2000);
           console.log('Activity edit found');

         }
         else{
               console.log('No Activity edit found');
         }
       });
          
    });

     it ('Delete Activities', async function() {
     
         await objet.taskAddActivity.get(2).click();
         await browser.sleep(2000);
         await objet.activityListdelete(1, 8);
         await browser.sleep(2000);
         
         await objet.activitydeletereason.isPresent().then(async function(reason){

          if(reason){
            
                 await objet.activitydeletereason.click();
                 await objet.activitydeletereason.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                 await browser.actions().mouseMove(objet.activitydeletereason.sendKeys('Wrong Activity')).perform();
                 await browser.sleep(2000);
                 await objet.activityDeleteSave.get(1).click();
                 await browser.sleep(2000);
                 await objet.conformationOkPopup.click();
                 console.log('Delete activity reason found');
               }
          else{
            console.log('No Delete activity reason found');
             }
          });
       });

     });