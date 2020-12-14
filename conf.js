
 var HtmlReporter = require('protractor-beautiful-reporter');
 exports.config = {
	   
	    directConnect: true,
	    seleniumAddress: 'http://localhost:4444/wd/hub',
		 
		multiCapabilities: [
			              {
				    'browserName': 'chrome'
								}
							],
								   
		framework: 'jasmine',
	 
	  suites:{

		  Incident:['./Tests/incident-spec.js'],
		  Tasks:['./Tests/task-spec.js'],
		  MacdTasks:['./Tests/macdTasks-spec.js'],
		  MacdIncident:['./Tests/macdIncident-spec.js'],
		  autoAddUser:['./Tests/autoMacdAddUser-spec.js'],
		  autoUpdateUser:['./Tests/autoMacdUpdateUser-spec.js'],
		  loginPage:['./Tests/loginValidations-spec.js'],
		  autoDeleteUser:['./Tests/autoMacdDeleteUser-spec.js'],
		  autoMoveRequest:['./Tests/autoMacdMoveUser-spec.js'],
		  autoBreakFix:['./Tests/autoMacdBreakFix-spec.js']
	  },
	 // SELENIUM_PROMISE_MANAGER: false,
	 //specs: ['example_service.js'],
	  //suites:{
//name1: ['Servicegroup.js'], 
        // name2:  ['Service.js'],
		// name3:  ['Severities.js']    
	//},
	//specs: ['Service.js'],
	onPrepare:function(){
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(2000);
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'tmp/screenshots'
		 }).getJasmine2Reporter());
	},
	jasmineNodeOpts: {
		  showColors: true, // Use colors in the command line report.
		  defaultTimeoutInterval:300000,
		  
		},		
  
  };