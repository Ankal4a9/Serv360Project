//Page object Model for Client  page
var Pageobject_login = require('./Pageobject_login.js');
var loginServ = require('../TestProject1/example_login.js');
var page2=new Pageobject_login();
var login=new loginServ();

//browser.ignoreSynchronization=true;
browser.waitForAngularEnabled(false);
describe('Testing Serv360 application flow using page object', function() {
 
beforeAll(async function() {
    await login.login('admin@synnex.com','123456');
    await browser.sleep(1000);
});

it ('Add New Client', async function() {
    await page2.SeveritySetup.click();
    await page2.SeverityAccountManagement.click();
    await page2.Client.click();
    await page2.AddNewTemplate.click();
    await browser.sleep(500);
    await page2.ClientPartner.click();
    await page2.PartnerName.sendKeys('Test Clarity Client Record 65111');
    await page2.PartnerDisplayName.sendKeys('Test Clarity Client Record 65111');
    await browser.sleep(500);
    await page2.LocationName.sendKeys('Test12 Client location Record 65111');
    await page2.LocationShortName.sendKeys('Test12 Record location 65111');
    await page2.ClientTimezone.click();
    await page2.ClientFullAddress.sendKeys('Test12 Clarity Client Full Address 65111');
    await browser.sleep(500);
    await page2.DefaultSLA(0);
    await browser.sleep(500);
    await page2.ServicegroupSaveButton.click();
    await browser.sleep(500);
});

it ('Add New SHN', async function() {
    await page2.SHN(0);
    await browser.sleep(1000);
    await page2.SHNDescription.click();
    await page2.SHNDescription.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await browser.actions().mouseMove( page2.SHNDescription.sendKeys('Test SHN Description Record test 65111')).perform()
    await page2.SHNSave.click();
    await page2.RUNBookDescription.click();
    await browser.sleep(1000);
    await page2.RUNBookDescription.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    await browser.actions().mouseMove( page2.RUNBookDescription.sendKeys('Test RUNBook Description Record test 65111')).perform()
    await page2.RUNBookSave.click();
    await browser.sleep(500);
});

it ('Add New Client Location', async function() {
    await page2.SHN(1);
    await browser.sleep(1000);
    await page2.LocationclientNew.click();
    await browser.sleep(1000);
    await page2.LocationName.isPresent();
    //console.log('element exist');
    await browser.sleep(1000);
    await browser.actions().mouseMove(element(by.id('load-addForm')).element(by.name('location_name'))).click().perform();
    await element(by.id('load-addForm')).element(by.name('location_name')).sendKeys('New Test12 Location clarity record 65111');
    await element(by.id('load-addForm')).element(by.name('location_short_name')).sendKeys('New Test12 Record 65111');
    await element(by.id('load-addForm')).element(by.name('timezone')).$('[value="17"]').click();
    await browser.sleep(1000);
    await element(by.id('load-addForm')).element(by.name('location_description')).sendKeys('Test12 Clarity Partner Full Address 65111');
    await browser.sleep(1000);
    await page2.LocationWorkingdays(0);
    await page2.LocationWorkingdays(1);
    await page2.LocationWorkingdays(2);
    await page2.LocationWorkingdays(3);
    await page2.LocationWorkingdays(4);
    await page2.LocationWorkingdays(5);
    await page2.LocationWorkingdays(6);
    await browser.sleep(1000);
    await element(by.id('load-addForm')).element(by.buttonText('Save')).click();
    await browser.sleep(1000);
    await page2.SHN(1);
    await browser.sleep(500);
});

it ('Add New Client Holidays', async function() {
    await element(by.xpath('//*[@id="accordion"]/div[4]/div[1]')).click();
    await browser.sleep(1000);
    await element(by.xpath('//*[@id="holiday-details"]/div/div/div/div[1]/a')).click();
    await browser.sleep(1000);
    await page2.Holidaystartdate.click();
    await browser.sleep(1000);
    await page2.Holiday_datepicker(3,2);
    //browser.sleep(2000);
    await page2.HolidayOccassion.sendKeys('Test12 Holiday Occassion 65111');
    await browser.sleep(1000);
    await page2.Holidaysave.click();
    await browser.sleep(500);
});

it ('Add New Client SLA', async function() { 
    await page2.SHN(2);
    await browser.sleep(1000);
    await page2.SLANew.click();
    await browser.sleep(1000);
    await page2.SLASeverity.click();
    await browser.sleep(1000);
    await page2.SLARequestType.click();
    await browser.sleep(1000);
    await page2.SLALocation1.click();
    await browser.sleep(1000);
    await page2.ResponseSLA.sendKeys('01:02:05');
    await page2.SLASave.click();
    await browser.sleep(500);
});

it ('Add New Client Gateway',async  function() {
    await page2.SHN(3);
    await browser.sleep(1000);
    await page2.ClientGatewayNew.click();
    await browser.sleep(1000);
    //page2.ClientGatewayType.click();
    await page2.GatewayTypeserv360.click();
    await browser.sleep(1000);
    await page2.ClientGatewayLocation.click();
    await page2.ClientGatewayName.sendKeys('New Test12 Client Gateway 65111');
    await browser.sleep(1000);
    await page2.ClientGatewayIpaddress.sendKeys('10.10.322.198');
    /*page2.ClientGatewayHostname.sendKeys('Test12 Hostname 121');
    browser.sleep(2000);  
    page2.ClientGatewayemail.sendKeys('newtest12clientgatewayemail@test1.com');
    page2.ClientGatewayPassword.sendKeys('123456');
    browser.sleep(2000);
    page2.ClientVendorEmail.sendKeys('newtest12clientvendoremail@test12.com');
    page2.ClientPOMEmail.sendKeys('newtest12clientpomemail@test21.com');
    browser.sleep(2000);*/ 
    await page2.ClientGatewaySave1.click();
    await browser.sleep(500);
});

it ('Add New Client Gateway Severity',async function() {
    await page2.SHN(4);
    await browser.sleep(1000);
    await page2.GatewaySeverityNew.click();
    await browser.sleep(1000);
    await page2.ClientGateways.click();
    await browser.sleep(1000);
    await page2.ClientGatewaySeverity.click();
    await browser.sleep(1000);
    await page2.ClientGatewayWaitTime.sendKeys('067');
    await page2.ClientGatewaySeveritySave.click();
    await browser.sleep(500);
});

it ('Add New Client Device Template',async function() {
    await page2.ClientDeviceTemplate.click();
    await browser.sleep(1000);
    await page2.ClientDeviceTemplateNew.click();
    await browser.sleep(1000);
    await page2.ClientTemplateName.sendKeys('Client New Device Type 65111')
    await page2.ClientDeviceTemplategateway.click();
    await browser.sleep(1000);
    await page2.ClientTemplateDeviceType.click();
    await browser.sleep(1000);
    await page2.ClientTemplateServiceGroup.click();
    await browser.sleep(1000);
    await page2.ClientDeviceTemplateSave.click(); 
    await browser.sleep(1000);

});

it ('Add New Client Device',async function() {
    await page2.SHN(5);
    await browser.sleep(1000);
    await page2.ClientDeviceNew.click();
    await browser.sleep(1000);
    await page2.ClientDeviceName.sendKeys('Client Device Name 65111');
    await page2.ClientDeviceAliasName.sendKeys('Client Device Name 65111');
    await page2.ClientDeviceIpaddress1.sendKeys('10.10.321.394');
    await page2.ClientDeviceGateway1.click();
    await browser.sleep(1000);
    await page2.ClientDeviceoem.click();
    await browser.sleep(1000);
    await page2.ClientDeviceType1.click();
    await page2.ClientDeviceImpact.click();
    await browser.sleep(1000);
    await page2.ClientDeviceMonitoringTemplate.click();
    await page2.ClientDeviceCustomizetemplate.click();
    await browser.sleep(1000);
    await page2.ClientDeviceSave.click();
    await browser.sleep(500);
});

it ('Add New Client Users',async  function() {
    await page2.ClientUser.click();
    await browser.sleep(1000);
    await page2.ClientUserNew.click();
    await browser.sleep(1000);
    await page2.ClientFirstName.sendKeys('Test Client Firstname65111');
    await page2.ClientLastName.sendKeys('Test Client Lastname65111');
    await page2.ClientUserEmail.sendKeys('test1email65111@test.com');
    await page2.CliedTierid.click();
    await browser.sleep(1000);
    await page2.ClientUserLocation.click();
    await page2.ClientRolePermission.click();
    await page2.ClientOEMClick.click();
    await browser.sleep(1000);
    await page2.ClientUserOEM(0);
    await browser.sleep(1000);
    await page2.ClientOEMClick.click();
    await browser.sleep(1000);
    await page2.ClientUserContact.click();
    await browser.sleep(1000);
    await page2.ClientUserSave.click();
    await browser.sleep(500);
});

});