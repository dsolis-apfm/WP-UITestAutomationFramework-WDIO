import basepage from "../pages/basepage";
const elementUtil = require("../../utils/elementUtil");

class loginPage extends basepage {
    open() {
     super.open("/login/");
    }
    get getUsername() {
     return $('#username');
    }
    get getPassword() {
     return $('#password');
    }
    get continueBtn () { 
     return $("//button[@type='submit'][contains(.,'Continue')]");
    }
    get PageTitle() {
     return elementUtil.doGetPageTitle();
    }
    doLogin(usernameField, passwordField) {
     elementUtil.doSetValue(this.getUsername,usernameField)
     elementUtil.doSetValue(this.getPassword,passwordField)
     elementUtil.doClick(this.continueBtn)
    }
   //Validations for Login
   }
   export default new loginPage();