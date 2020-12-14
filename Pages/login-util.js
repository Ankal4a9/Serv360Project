//Page object Model for Login Page
let loginPage=function(){
   
    var objects = require('./objectsPage.js');
    
    let object=new objects();
    
    this.login= async function(EMAIL,PASSWORD){

    await browser.get('https://demo.seismic360.com/login');
    await browser.sleep(2000);
    await object.userLogin(EMAIL,PASSWORD);
    await browser.sleep(1000);
    console.log('Application Logged in Successfully');
   
    }

    this.macdLogin=async function(EMAIL,PASSWORD){

        await browser.get('https://demo.seismic360.com/mac/');
        await browser.sleep(2000);
        await object.macdlogin(EMAIL,PASSWORD);
        await browser.sleep(1000);
       console.log('Application Logged in Successfully');
    }
}
module.exports=loginPage;