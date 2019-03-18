var demoObject = function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var history = element.all(by.repeater('result in memory'));

    this.add = async function (a, b) {
        await firstNumber.sendKeys(a);
        await secondNumber.sendKeys(b);
        await goButton.click();
};
    this.get = async function () {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.getFirstHistoryText = async function () {
        return await history.first().getText();
    };

    this.getLastHistoryText = async function () {
        return await  history.last().getText();
    };

    this.getHistoryCount = async function () {
        return await history.count();
    }
};
module.exports = new demoObject();