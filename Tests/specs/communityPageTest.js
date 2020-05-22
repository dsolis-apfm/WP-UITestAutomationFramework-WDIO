import communityPage from ".././pages/communitypage";

describe("communityapgetests", () => {
  it("communitypage assertions", () => {
    var communitydetailPageTitle = browser.getTitle();
    console.log(communitydetailPageTitle);
  });

  it("validating the existance for phonenumber and review wrapper in detail screen", () => {
    // var phone = communityPage.phonenumberandreviewarea;
    //  phone.isDisplayed();

    communityPage.phonenumberandreviewarea.isDisplayed();
  });

  it("validating the existance for Pricing module ", () => {
    communityPage.pricingModule.isDisplayed();
  }) /
    it("validating the existance for  care provided in the community", () => {
      communityPage.CareTypesProvidedAtTheCommunity.isDisplayed();
    });

  it("validating the existance for community review card ", () => {
    communityPage.communityReviewModule.isDisplayed();
  });
});
