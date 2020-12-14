'use strict';

const { element } = require("protractor");

var sideMenuObject =function(){
   
       
        this.menulist = element(by.css('div[class="slimScrollDiv"]'));
        this.sideMenu= this.menulist.all(by.css('li[class="nav-item"]'));
        this.submenu=element(by.css('ul[class="sub-menu"]')).all(by.css('li[class="nav-item"]'));
      
       
      this.moduleName=async function(name){
        
        await element(by.linkText(name)).click();
        await browser.sleep(500);

      }  

    this. selectMenuItems=async function(menu) {
       // await this.recipientFilter.click();
       // await element(by.id('recipient-selection-option-' + recipientTitle.replace(' ', '_'))).click();
       console.log('Before menu item selected');
       await this.menulist.isPresent();
       await browser.sleep(500);
      // browser.actions().mouseMove(await this.recipientFilter).perform();
       this.sideMenu= this.menulist.all(by.css('li[class="nav-item"]'));
       await this.sideMenu.get(menu).click();
       console.log('Side menu click event');
    }

    this.selectSubMenu=async function(itm){

      //this.list=await element(by.css('ul[class="sub-menu"]')).all(by.css('li[class="nav-item"]')).get(lis).element(by.tagName('ul')).all(by.tagName('li'));
      browser.actions().mouseMove(this.submenu.get(itm)).click().perform();
       /* this.list=element(by.css('ul[class="sub-menu"]')).all(by.tagName('li'));
        this.button=element(by.buttonText(itm));
        browser.actions().mouseMove(this.button).click().perform();*/
        await browser.sleep(500);
        console.log('Clicked on submenu Item');

    }

}
module.exports=sideMenuObject;