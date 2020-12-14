//Data driven testing format for login page
describe ('Login Page Data Driven' , function() {
 browser.ignoreSynchronization = true;  

    beforeEach(function(){
     browser.ignoreSynchronization=true;
     browser.get('http://10.10.32.52/qav/serv360');
     browser.driver.manage().window().maximize();
     });
       it('To verify Login, using Data Driven Technique from Json file', function(){
        var testData = require('C:\\Users\\Administrator\\Desktop\\protractor\\TestProject1\\Test.json'); 
        var a = element(by.name('username'));
        var b = element(by.name('password'));
        a.sendKeys(testData[0].username);
        b.sendKeys(testData[0].passwordField); 
        browser.sleep(3000);
        element(by.xpath('//*[@id="login-form"]/div[4]/button')).click();

		}); 
  });
  