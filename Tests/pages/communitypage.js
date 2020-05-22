
import basepage from "../pages/basepage";

class communityPage extends basepage {
    
        open() {
            super.open('/community/the-gardens-at-town-square-71221')
        }

    
  
    get phonenumberandreviewarea() {
        return $('//div[@class="contact-review-wrapper"]//div[@class="need-help"]');
    }

    get communityDescription() {
        return $('.community-detail');
    }

    get pricingModule() {
        return $('.Pricing-module');
    }


    get communityReviewModule() {
        return $('h2*=Reviews of ');
    }

    get communityDetailsModule() {
        return $('h2*=Community Details at ');
    }

    get CareTypesProvidedAtTheCommunity() {
        return $('h2*=Senior Housing Types Provided at');
    }

    get PhonenumberTop() {
        return $('*=tel=');
    }

    //sidebar content

    get SimilarCommunitiesNearBy() {
        return $('//div[@class="Sidebar-content padded"]');
    }

    //nearby senior housing in selected city
    get OtherSeniorHousinginCity() {
        return $('//*[@id="CommunityContainer-react-component-87646736-9525-4ac9-972b-6009adc3ac7d"]/div/div[1]/div/div[2]/div[2]');
    }

    get OtherNearByMetros() {
        return $('//*[@id="CommunityContainer-react-component-87646736-9525-4ac9-972b-6009adc3ac7d"]/div/div[1]/div/div[2]/div[3]');
    }




}
export default new communityPage();