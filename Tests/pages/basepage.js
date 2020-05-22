export default class basePage{

 
    
    open(path) {
        browser.url(path);
    }

waitUsingFixedTimeout(time) {
    browser.pause(time);

}

}
//module.exports = new basePage()
//moddule.exports = new basePage();
//export default basePage;