import basepage from "../pages/basepage";
const elementUtil = require("../../utils/elementUtil");

class apfmhomePage extends basepage {
  open() {
    super.open("/home-page-step-2");
  }

  //page locators
  //first leadform
  get  entercityorpostalcode() { return $('#cta-search-field');}

  //get startyoursearchButton () { return $('//span[contains(text(),"Start Your Search")]
  //get startyoursearchButton () { return $('button = Start Your Search' );}'); }

  // homepagestep2 lead form

  get fullname() {
    return $("#leadFormFullname");
  }

  get email() {
    return $("#leadFormEmail");
  }

  get phone() {
    return $("#leadFormPhone");
  }

  get cityorpostalcode() {
    return $("#inputLocation-field ");
  }

  get startmysearchButtonstep2lead() {
    //return $('//*[@id="DestinationPageForm"]/button ');
    return $('//button[@class="submit-btn"]')
  }

  get startmysearchButtonhomepage () { return $("span=Start Your Search");}
  //get startmysearchButton () { return $('button=Start Your Search')   ;}

  //page actions:

  get PageTitle() {
    return elementUtil.doGetPageTitle();
  }
  submitStep2LeadForm(fullname, email, phone,  location) {

    elementUtil.doSetValue(this.fullname,fullname)
    elementUtil.doSetValue(this.email,email)
   // browser.executeScript("window.history.back()")
    elementUtil.doSetValue(this.phone,phone)
    //browser.debug()
   // elementUtil.doSetValue(this.caretype,caretype)
   // elementUtil.doSetValue(this.cityorpostalcode,location)

    elementUtil.doClick(this.startmysearchButtonstep2lead)






  }
}

export default new apfmhomePage();
