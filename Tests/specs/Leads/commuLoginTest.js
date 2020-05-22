import loginPage from "../../pages/commuLoginPage";
const creds =  require ("../../test-data/test-env");

describe("Verify the valid Login", () => {
 it("assert title of apfm", () => {
  loginPage.open();
  //var title = browser.getTitle(); //Gets the title of apfm
  //expect(title).to.equal("Senior Assisted Living Guides: Find Senior Care A Place for Mom"); //Asserting title
 });
 it("Do valid Login", () => {
  browser.setTimeout({ 'pageLoad': 10000 })
   loginPage.doLogin(
   creds.username,
   creds.password,
  );
 /* loginPage.getUsername.setValue('jssegura.vri@gmail.com')
  loginPage.getPassword.setValue('apfm@1234')
  browser.saveScreenshot("../../screenshots.png"); */
 });
});