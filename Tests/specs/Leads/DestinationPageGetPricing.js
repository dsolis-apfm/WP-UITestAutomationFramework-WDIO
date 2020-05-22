
import destinationPage from '../../pages/destinationpage'

describe("Destination Page leads", function() {

it("getpricing lead " , function () {
    destinationPage.open()

    destinationPage.getPricingButton.click()
    destinationPage.getpricinglead_Email.setValue('test@aplaceformom.com')
    destinationPage.getpricinglead_Fullname.setValue('test')
    destinationPage.getpricinglead_Phone.setValue('5555555555')
    destinationPage.getpricinglead_submitbutton.click()





})











})



    


