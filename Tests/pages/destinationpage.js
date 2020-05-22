

import basepage from "../pages/basepage";

//const basepage = require('./basepage')


class destinationPage extends basepage
 {
    open() {
        super.open('/assisted-living/washington/bellevue');

    }

    //elements on destinationpage

    //community cards

    get communityresultslist() {
        return $('#DestinationResultsList'); }

    //1st community card
    get firstCommunityCard() { return  $('//ul[@id="DestinationResultsList"]//li[1]/a'); }

    get getPricingButton() { return $('//*[@id="DestinationResultsList"]/li[1]/article/section/div[2]/a')}

    //get pricing lead

get getpricinglead_Fullname() { return $('#leadFormFullname')}
get getpricinglead_Email() {return $('#leadFormEmail')}
get getpricinglead_Phone() { return $('#leadFormPhone')}
get getpricinglead_submitbutton() { return $('//button[@class="submit-btn"]')}
    

//ILS
get ils() { return $('.other-care-types');}
////ul[@data-reactid='307']


   

}
export default new destinationPage();
//module.export = new destinationPage()