//Page object Model for Incident  page

var objects = require('../Pages/objectsPage.js');
var loginObj= require('../Pages/login-util');
var sideMenuObject=require('../Pages/sideMenu.Obj');
const { async } = require('q');


let objet=new objects();
let logIn=new loginObj();
let menu=new sideMenuObject();

browser.ignoreSynchronization=true;
describe('Incident Module Test Cases', function() {
 
beforeAll(async function() {

    browser.waitForAngularEnabled(false);
    await logIn.login('sidprtadmin@mail.com','123456');
    await browser.sleep(3000);
});

it('Navigate to Incident Module',async function(){
   
    await menu.menulist.isPresent().then(async function(side){

        if(side){            
            await menu.selectMenuItems(1);
            await browser.sleep(2000);
            await objet.incidents.click();
            await objet.allIncidents.click();
            await browser.sleep(2000);
            expect(await objet.createNew.isPresent()).toBe(true);

          }
        else{
            console.log('No menu items Found');
            await browser.close();
          }
       });
    
     });

   it('Validate the Required Fields',async function(){
     
        await objet.createNew.isPresent().then(async function(btn){

            if(btn){
                  
                await objet.createNew.click();
                await browser.sleep(2000);
                expect(await objet.submit.isPresent()).toBe(true);
                await objet.submit.click();
                await browser.sleep(1000);
                 expect(await objet.errorValidations.get(0).getText()).toEqual('This is a required field');
                 expect(await objet.errorValidations.get(1).getText()).toEqual('This is a required field');
                 expect(await objet.errorValidations.get(2).getText()).toEqual('This is a required field');
                 expect(await objet.errorValidations.get(3).getText()).toEqual('This is a required field');
                 expect(await objet.errorValidations.get(4).getText()).toEqual('Subject is required');

                }
            else{
                
                 console.log('No Create New Button Found');
                 await browser.close();
            }
        }); 
        
     });

   it ('Add New Incident',async function() {
     
          await objet.partneroptions.get(2).click();
          await browser.sleep(2000);
          await objet.clientoptions.get(1).click();
          await browser.sleep(2000);
         var winHandles=browser.getAllWindowHandles();
           winHandles.then(function(handles) 
         {
           var parentWindow=handles[0];
           var popUpWindow=handles[1];
            browser.switchTo().window(popUpWindow);
           browser.switchTo().window(parentWindow);
         });
         await browser.sleep(2000);
         await objet.clientLocationoptions.get(1).click();
         await browser.sleep(1000);
         await objet.deviceoptions.get(2).click();
         // browser.actions().mouseMove(await objet.categoty.get(0)).click().perform();
         await objet.deviceTypesoptions.get(0).click();
         await browser.sleep(1000);
         await objet.impactoptions.get(2).click();
         await browser.sleep(1000);
         await objet.requestoroptions.get(1).click();
         await browser.sleep(1000);
         await objet.urgencyoptions.get(1).click();
         await browser.sleep(1000);
         await objet.assignTooptions.get(0).click();
         await browser.sleep(1000);
         await objet.subjectTextBox('Automatic New Subject');
         await browser.sleep(2000);
         await objet.description.click();
         await browser.sleep(1000);
         await objet.description.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
         await browser.actions().mouseMove( objet.description.sendKeys('Automatic New Description')).perform()
         await browser.sleep(2000);
         expect(await objet.submit.isPresent()).toBe(true);
         await objet.submit.click();
         await browser.sleep(3000);
         await objet.conformationOkPopup.click();
         await browser.sleep(2000);
   
       });

    it ('Ticket Filter' ,async function() {
     
        expect(await objet.filterHeader.isPresent()).toBe(true);
        await objet.filterHeader.isPresent().then(async function(header){

          if(header){
               
            await objet.incidentssorting(0, 3);
            await browser.sleep(3000);
            //Descending order
            await objet.incidentssorting(0, 3);
            await browser.sleep(3000);
            console.log('Filter Header Found');
          }
          else{
            console.log('No Filter Header Found');

          }
      
       });
    
      });

   it ('Ticket Search' ,async function() {
       
        await objet.searchincidet.isPresent().then(async function(search){

          if(search){

            expect(await objet.searchincidet.isPresent()).toBe(true);
            await objet.searchincidet.click();
            await browser.sleep(1000);
            await objet.searchincidet.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            await browser.actions().mouseMove(objet.searchincidet.sendKeys('Siddhu admin')).perform()
            await browser.sleep(5000);
            console.log('Search for Inceident found');
          }
          else{
            console.log('No Search for Inceident found');

          }
         });      
       
       });

     it('Activities Required field Validations', async function(){

        await objet.incidentsList(2, 0);
        await browser.sleep(3000);
        await objet.addActivity.isPresent().then(async function(activity){
          if(activity){
            expect(await objet.addActivity.get(1).isPresent()).toBe(true);
            await objet.addActivity.get(1).click();
            await objet.activitySave.click();
            await browser.sleep(2000);
            expect(await objet.errorValidations.get(0).getText()).toEqual('Start time is required');
            expect(await objet.errorValidations.get(1).getText()).toEqual('End time is required');
            console.log('Add Activity Found');
          }
          else{
            console.log('No Add Activity Found');
          }
        });
        
     });

    it ('Add Activitie for created Ticket', async function() {
    
        expect(await objet.startdate.isPresent()).toBe(true);
        await objet.startdate.click();
        await browser.sleep(1000);
        await objet.datepicker('/html/body/div[4]/div[1]/div[2]/table',3, 3);
        await browser.sleep(2000);
        await objet.activitynotes.click();
        await browser.sleep(2000);
        await objet.enddate.click();
        await browser.sleep(2000);
        await objet.datepicker('/html/body/div[5]/div[1]/div[2]/table',3, 4);
        await browser.sleep(1000);
        await objet.activitynotes.click();
    
        // await page2.enddate.sendKeys('2020/02/22 17:44:04');
        await browser.sleep(2000);
        await browser.actions().mouseMove(await objet.activityType).perform();
        await objet.activityTypeoptions.get(7).click();
        await browser.sleep(2000);
        await objet.internalComments.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.actions().mouseMove( objet.internalComments.sendKeys('Automatic Add New activity')).perform()
        await browser.sleep(2000);
        await objet.activityNotes.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await browser.actions().mouseMove(objet.activityNotes.sendKeys('Automatic Activity Note New')).perform()
        await browser.sleep(2000);
        await objet.activitySave.click();
        await browser.sleep(2000);
        //Aler pop-up close
        await browser.switchTo().alert().accept();
        await browser.sleep(3000);
        await objet.conformationOkPopup.click();
        await browser.sleep(2000);
    });

    it ('Edit And Update Activity', async function(){
    
       // await objet.incidentsList(2, 0);
       // await browser.sleep(2000);
       expect(await objet.addActivity.get(2).isPresent()).toBe(true);
       await objet.addActivity.get(2).click();
       await browser.sleep(2000);
       await objet.ticket_activityListEdit(2, 8);
       await browser.sleep(3000);
       expect(await objet.activityUpdate.isPresent()).toBe(true);
       await objet.activityUpdate.click();
       await browser.sleep(2000);
       //Aler pop-up close
       await browser.switchTo().alert().accept();
       await browser.sleep(4000);
       await objet.conformationOkPopup.click();
       await browser.sleep(3000);
    });

  it('Delete Activity', async function() {
    
       await objet.addActivity.get(2).click();
       await browser.sleep(2000);
       await objet.activityListdelete(2, 8);
       await browser.sleep(2000);
       await objet.activitydeletereason.isPresent().then(async function(resson){

        if(resson){
          
          await objet.activitydeletereason.click();
          await objet.activitydeletereason.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
          await browser.actions().mouseMove( await objet.activitydeletereason).perform();
          await objet.activitydeletereason.sendKeys('Wrong Activity')
          await browser.sleep(2000);
          expect(await objet.activityDeleteSave.get(1).isPresent()).toBe(true);
          await objet.activityDeleteSave.get(1).click();
          await browser.sleep(3000);
          await objet.conformationOkPopup.click();
          console.log('Delete activity Found');
        }
        else{
          console.log('No Delete activity Found');
        }

       });
      });
    });