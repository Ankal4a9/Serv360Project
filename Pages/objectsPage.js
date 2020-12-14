const { element } = require("protractor");

//Page object model for Login Page
var pageObjects = function() {

   
    //**********Login Page Objects************************//

    this.usernameTextBox = element(by.id('username'));
    this.passwordTextBox = element(by.id('password'));
    this.loginButton = element(by.css('button[type="submit"]'));
    this.loginValidations=element.all(by.css('span[class="help-block"]'));
    //********************Incident Module**********************************//

    this.views = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/a'));
    this.incidents = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/ul/li[2]/a'));
    this.allIncidents = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/ul/li[2]/ul/li[1]/a'));
    this.createNew = element(by.css('a[class="btn btn-success"]'));
    this.partner = element(by.id('Patner'));
    this.partneroptions=this.partner.all(by.tagName('option'));
    this.client = element(by.id('Client'));
    this.clientoptions=this.client.all(by.tagName('option'));
    this.clientLocation = element(by.id('ClientLocation'));
    this.clientLocationoptions=this.clientLocation.all(by.tagName('option'));
    this.devices = element(by.id('Devices'));
    this.deviceoptions=this.devices.all(by.tagName('option'));
    this.deviceTypes = element(by.id('deviceTypes'));
    this.deviceTypesoptions=this.deviceTypes.all(by.tagName('option'));
    this.impact = element(by.id('urgency'));
    this.categoty=element(by.id('Categories')).all(by.tagName('option'));
    this.options=element(by.css('ul[class="select2-results__options"]')).all(by.tagName('li'));
    this.impactoptions=this.impact.all(by.tagName('option'));
    this.requestor = element(by.id('requester'));
    this.requestoroptions=this.requestor.all(by.tagName('option'));
    this.urgency = element(by.id('severity'));
    this.urgencyoptions=this.urgency.all(by.tagName('option'));
    this.assignTo = element(by.id('Users'));
    this.assignTooptions=this.assignTo.all(by.tagName('option'));
    this.subject = element(by.id('subject'));
    //this.description = element(by.id('cke_comment'));
    //this.description = element(by.css('div[class="cke_inner cke_reset"]'));
    this.description = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
    this.submit = element(by.id('inc_button'));
    this.errorValidations=element.all(by.css('span[class="help-block form-error"]'));
    this.searchincidet=element(by.css('input[type="search"]'));
    this.filterHeader=element(by.css('div[class="dataTables_scrollHead"]'))
    this.IncidentEdit = element(by.xpath('//*[@id="employee-grid"]/tbody/tr[2]/td[1]/a'));
    this.ticketsearch = element(by.xpath('//*[@id="employee-grid_filter"]/label/input'));

   //****************Activity Elements********************** */

    this.addActivity = element(by.css('div[class="tabbable-custom hover-up"]')).all(by.tagName('li'));
    this.startdate = element(by.css('input[name="start_time"]'));
    this.activitynotes = element(by.xpath('//*[@id="activity_manual_note"]/div[1]/div'));
    this.enddate = element(by.css('input[name="end_time"]'));
    this.activityType = element(by.id('activity_type'));
    this.activityTypeoptions=this.activityType.all(by.tagName('option'));
    this.internalComments = element(by.xpath('//*[@id="add_activity"]/form/div[1]/div[1]/div[4]/div/textarea'));
    this.activityNotes = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
    this.activitySave = element(by.css('button[id="save_activity"]'));
    this.activitydelete = element.all(by.id('activitydel'));
    this.activitydeletereason = element(by.id('reason_to_del'));
    this.activityDeleteSave = element.all(by.css('button[class="btn green btn_vendercalculation"]'));
    this.activityEdit = element.all(by.id('activityedit'));
    this.activityUpdate = element(by.css('button[id="save_activity"]'));
    this.conformationOkPopup = element(by.css('button[class="confirm btn btn-lg btn-primary"]'));
   
      
    //*********************Task Module*******************************************//

    this.tasksViews = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/a'));
    this.tasks = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/ul/li[3]/a'));
    this.createTasks = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/ul/li[3]/ul/li[3]/a'));
    this.taskPartner = element(by.id('Patner'));
    this.taskPartneroptions=this.taskPartner.all(by.tagName('option'));
    this.taskClient = element(by.id('Client'));
    this.taskClientoptions=this.taskClient.all(by.tagName('option'));
    this.taskClientLocation = element(by.id('ClientLocation'));
    this.taskClientLocationoptions=this.taskClientLocation.all(by.tagName('option'));
    this.taskDevices = element(by.id('Devices'));
    this.taskDevicesoptions=this.taskDevices.all(by.tagName('option'));
    this.taskDeviceTypes = element(by.id('SubCategories'));
    this.taskDeviceTypesoptions=this.taskDeviceTypes.all(by.tagName('option'));
    this.requestType = element(by.id('requester_type'));
    this.requestTypeoptions=this.requestType.all(by.tagName('option'));
    this.taskAssignTo = element(by.id('Users'));
    this.taskAssignTooptions=this.taskAssignTo.all(by.tagName('option'));
    this.taskSubject = element(by.id('subject'));
    this.taskdescription = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
    this.taskSubmit = element(by.id('task_btn'));
    this.allTasks = element(by.xpath('/html/body/div[3]/div[1]/div/div/ul/li[2]/ul/li[3]/ul/li[1]/a'));
    this.taskAddActivity = element(by.css('div[class="tabbable-custom"]')).all(by.tagName('li'));
    this.taskActivityNotes = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
    this.taskInternalComments = element(by.xpath('//*[@id="add_activity"]/form/div[1]/div[1]/div[4]/div/textarea'));


    this.firstName=element(by.css('input[name="firstname_from"]'));
    this.lastName=element(by.css('input[name="lastname_from"]'));
    this.phone=element(by.css('input[name="phone"]'));
    this.cubicle=element(by.css('input[name="cubicle_from"]'));
    this.changeRequest=element(by.css('select[name="change_request"]')).all(by.tagName('option'));
    this.requiredByDate=element(by.css('input[name="required_by"]'));
    this.calenderNext=element(by.xpath('/html/body/div[12]/div[1]/div[1]/button[3]'));//.element(by.css('button[class="xdsoft_next"]'));
    this.voiceMail=element(by.css('select[name="voice_mail"]')).all(by.tagName('option'));
    this.firstNameTo=element(by.css('input[name="firstname_to"]'));
    this.lastNameTo=element(by.css('input[name="lastname_to"]'));
    this.macAddress=element(by.css('input[name="mac_address"]'));
    

    //***********MACD ELEMENTS************************ *//

    this.createRequest=element(by.css('a[class="btn red compose-btn btn-block"]'));
    this.taskButton=element(by.css('a[class="btn btn-sm blue btn-outline sbold active"]'));
    this.incidentButton=element(by.css('a[class="btn btn-sm blue btn-outline sbold"]'));
    this.macdImpact=element(by.css('select[name="urgency"]')).all(by.tagName('option'));
    this.macdUrgency=element(by.css('select[name="severity"]')).all(by.tagName('option'));
    this.macdPartner=element(by.css('select[id="partner"]')).all(by.tagName('option'));
    this.macdClient=element(by.css('select[id="client"]')).all(by.tagName('option'));
    this.macdDevices=element(by.css('select[id="device"]')).all(by.tagName('option'));
    this.macdOem=element(by.css('select[id="oem"]')).all(by.tagName('option'));
    this.macdDeviceType=element(by.css('select[id="device_type"]')).all(by.tagName('option'));
    this.macdRequestType=element(by.css('select[id="request_types"]')).all(by.tagName('option'));
    this.macdSubject=element(by.css('div[class="col-sm-12 pad0"]')).element(by.css('input[name="client_info[subject]"]'));
    this.macdTextArea=element(by.css('textarea[name="client_info[desc]"]'));
    this.incidentSubject=element(by.css('input[name="subject"]'));
    this.incidentDescription=element(by.css('textarea[name="desc"]'));
    this.macdSubmit=element(by.css('button[type="submit"]'));
    this.userMenu=element(by.xpath('/html/body/div[1]/div/div/div[2]/ul/li/a/i'));//.element(by.css('ul[class="nav navbar-nav pull-right"]')).element(by.css('li[class="dropdown dropdown-user open"]'));
    this.logOutButton=element(by.xpath('/html/body/div[1]/div/div/div[2]/ul/li/ul/li/a/i'));
    this.checkBoxes=element.all(by.css('input[type="checkbox"]'));
    this.approveAndReject=element(by.css('div[class="btn-group input-actions"]')).all(by.tagName('a'));
    this.workPhone=element(by.css('input[name="client_info[work_phone]"]'));
    this.macdRequestTypes=element(by.css('select[id="request_types"]')).all(by.tagName('option'));
    this.macdTechnologies=element(by.css('select[id="technology"]')).all(by.tagName('option'));
    this.requestSubType=element(by.css('select[id="request_sub_type"]')).all(by.tagName('option'));
    this.userFirstName=element(by.css('input[name="request_info[firstName]"]'));
    this.userLastName=element(by.css('input[name="request_info[lastName]"]'));
    this.userID=element(by.css('input[id="userid"]'));
    this.password=element(by.css('input[type="password"]'));
    this.deviceAssociation=element(by.css('select[id="associatedDevices"]')).all(by.tagName('option'));
    this.comments=element(by.css('textarea[class="comments"]'));
    this.userIdDropDown=element(by.css('select[id="userid"]')).all(by.tagName('option'));
    this.phoneORExtension=element(by.css('input[name="request_info[phone]"]'));
    this.moveFromBuilding=element(by.css('select[id="location_from"]')).all(by.tagName('option'));
    this.moveToBuilding=element(by.css('select[id="location_to"]')).all(by.tagName('option'));
    this.moveFromCubicle=element(by.css('input[name="request_info[cubicle_from]"]'));
    this.moveToCubicle=element(by.css('input[name="request_info[cubicle_to]"]'));
    this.moveFirstname=element(by.css('input[name="request_info[firstname_from]"]'));
    this.moveLastname=element(by.css('input[name="request_info[lastname_from]"]'));
    this.breakfixSubject=element(by.css('input[name="subject"]'));
    this.macdDescription=element(by.css('textarea[id="desc"]'));


    //*******************FUNCTIONS********************** */

    //Serv360 Login 
    this.userLogin = function(name,pass) {
        this.usernameTextBox.sendKeys(name);
        this.passwordTextBox.sendKeys(pass);
        this.loginButton.click();

    }

    this.macdlogin=async function(name,pass){
      
        await element(by.css('input[name="user"]')).sendKeys(name);
        await element(by.css('input[name="password"]')).sendKeys(pass);
        await element(by.css('button[type="submit"]')).click();
    }

    this.dateTimePicker=async function(tr,td){
        var picker=await element(by.xpath('/html/body/div[8]')).element(by.tagName('table'));
        await picker.all(by.tagName('tr')).get(tr).all(by.tagName('td')).get(td).click();
    }
    
    
    this.Servicescheckboxselect = function(){
    var ServiceGroupCheckbox1 = element.all(by.css("input[type=checkbox]"));
    for(var i=0; i<=ServiceGroupCheckbox1; i++)
    {
         ServiceGroupCheckbox1.get(i).click();
    }

    }

    //Incident Module

    this.subjectTextBox = function(name){
        browser.actions().mouseMove( this.subject).click().perform();
         this.subject.sendKeys(name);
    }

    this.incidentsList = async function(trtable1,tdtable1){
        var list=await element(by.xpath('//*[@id="employee-grid"]/tbody'));
        await list.all(by.tagName('tr')).get(trtable1).all(by.tagName('td')).get(tdtable1).click();
       // var incident=await rows.get(trtable1);
    }


    this.ticket_activityListEdit= async function(tr,td){
       
        var activity_list_edit=await element(by.id('tblGrid_activity_log'));
        await activity_list_edit.all(by.tagName('tr')).get(tr).all(by.tagName('td')).get(td).element(by.css('i[class="fa fa-pencil-square-o"]')).click();
        
    }

    this.incidentssorting =async function(trtable1,tdtable1){
        
        var rowssorting=this.filterHeader.all(by.tagName('tr'));
        var sorting =await rowssorting.get(trtable1).all(by.tagName('th')).get(tdtable1);
        browser.actions().mouseMove(await sorting).click().perform();
    }

    this.tasksList = function(trtable21,tdtable21){
        
        var tasklist=element(by.xpath('//*[@id="employee-grid"]/tbody'));
        tasklist.all(by.tagName('tr')).get(trtable21).all(by.tagName('td')).get(tdtable21).click();
        
    }
    this.tasksTitles = function(trtable21,tdtable21){
        
        var tasklist=element(by.xpath('//*[@id="employee-grid"]/tbody'));
        tasklist.all(by.tagName('tr')).get(trtable21).all(by.tagName('td')).get(tdtable21).getAttribute('value');
        
    }

    this.datepicker = function(xpath,prdatetr1,prdatetd1){
        
        var prcalender=element(by.xpath(xpath)).element(by.tagName('tbody'));
        prcalender.all(by.tagName('tr')).get(prdatetr1).all(by.tagName('td')).get(prdatetd1).click();
        
    }

    this.activityListEdit = async function(tr,td){
       
        var activity_list=element(by.id('tblGrid_activity_log'));
        await activity_list.all(by.tagName('tr')).get(tr).all(by.tagName('td')).get(td).element(by.css('i[class="fa fa-pencil"]')).click();
    
    }

    this.activityListdelete = function(tr,td){
        var activity_list1=element(by.id('tblGrid_activity_log'));
        activity_list1.all(by.tagName('tr')).get(tr).all(by.tagName('td')).get(td).element(by.css('i[class="fa fa-trash"]')).click();
        
    }

    // macd //

    this.checkBox=async function(tr,th){

        this.table=element(by.xpath('//*[@id="employee-grid"]')).all(by.tagName('tr')).get(tr).all(by.tagName('th')).get(th).click();
    }
  
};
module.exports=pageObjects;