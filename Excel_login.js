//Read the data through exccel
browser.waitForAngularEnabled(false);
describe ('Serv360 login Page Data Driven' , function() {
	//browser.ignoreSynchronization = true;  
   
	   	beforeEach( function(){
		browser.ignoreSynchronization=true;
		browser.get('http://10.10.32.52/qav/serv360');
		browser.sleep(2000);
		browser.driver.manage().window().maximize();
		}); 

	it('Excel File Operations', function() {
		// set implicit time to 30 seconds
	    browser.manage().timeouts().implicitlyWait(3000);
		var Excel = require('exceljs');
		var Workbook1 = new Excel.Workbook();
	
		
			Workbook1.xlsx.readFile("C:\\Users\\Administrator\\Desktop\\protractor\\TestProject1\\test.xlsx").then(function()
			{
				//sheet object
				var Worksheet1 = Workbook1.getWorksheet("Login");
				//let cellValue = worksheet.getRow(1).getCell(1).toString();
				//var dobCol = worksheet.getColumn(1);
				var a =  element(by.id('username'));
				var b =  element(by.id('password'));
				var row = Worksheet1.getRow(1);
				var mail=row.getCell(1).toString();
				console.log('mailid= '+ mail);
				a.sendKeys(mail.toString());
				browser.sleep(2000);
				var pass=row.getCell(2).toString();
				console.log('password= '+ pass);
				b.sendKeys(pass.toString());
				browser.sleep(2000);
			});
		});
	});
				


				//var dobCol1 = worksheet.getColumn(2);
				//dobCol1.eachCell(function(cell, rowNumber) {
					//console.log('Cell ' + cell.toString());
				//	b.sendKeys(cell.toString());
				//browser.sleep(3000);
				//});				
				//row objct
				//let rowObject = worksheet.getRow(3);
				// cell object
				//let cellObject = rowObject.getCell(2);
				//print
				//console.log(cellValue.value);
				//use the cell value as url for navigation
				//browser.get(cellObject.toString())
				/*	browser.sleep(3000);
				b.sendKeys(row.getCell(2).toString());
				console.log(row.getCell(2).toString());
				browser.sleep(3000);*/
			