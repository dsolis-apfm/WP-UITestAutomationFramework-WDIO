import apfmhomePage from "../../Pages/apfmhomePage";

describe("Navigate to apfmhome", () => {
  it("assert title of apfm", () => {
    apfmhomePage.open();
    var title = browser.getTitle(); //Gets the title of apfm
    expect(title).to.equal(
      "Senior Assisted Living Guides: Find Senior Care A Place for Mom"
    ); //Asserting title
  });

  /* it("submit the  first lead form in apfmhome", () => {
    //  browser.executeScript("document.getElementById('cta-search-field').value='98011'")
    apfmhomePage.entercityorpostalcode.addValue("98002");

    /*  const footer = $('//a[@class="see-more-btn"]')
        footer.scrollIntoView()
        browser.pause(3000) */

 //   browser.saveScreenshot("../../screenshots.png");
 //   apfmhomePage.startmysearchButtonhomepage.click();
  // }); 
  
  

  it("submit the homepagestep2 lead form ", () => {
    apfmhomePage.submitStep2LeadForm(
      "test",
      "test@aplaceformom.com",
      "5555555555",
      "98005"
    );
  });
});
