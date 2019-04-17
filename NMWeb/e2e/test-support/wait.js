"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var TestWait = /** @class */ (function () {
    function TestWait() {
        this.ec = protractor_1.ExpectedConditions;
        this.defaultWaitTimeout = Math.floor(protractor_1.browser.params.allScriptsTimeout / 3);
    }
    TestWait.prototype.forElementPresent = function (element) {
        return protractor_1.browser.wait((this.ec.presenceOf(element)), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementNotPresent = function (element) {
        return protractor_1.browser.wait(this.ec.not(this.ec.presenceOf(element)), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementCount = function (elementArray, expectedCount) {
        return protractor_1.browser.wait(this.needTrue(elementArray, expectedCount), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementClickable = function (element) {
        return protractor_1.browser.wait(this.ec.elementToBeClickable(element), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementText = function (element, text) {
        return protractor_1.browser.wait(this.ec.textToBePresentInElement(element, text), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementWithoutText = function (element, text) {
        return protractor_1.browser.wait(this.ec.not(this.ec.textToBePresentInElement(element, text)), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.forElementVisible = function (element) {
        return protractor_1.browser.wait(this.ec.visibilityOf(element), this.defaultWaitTimeout, 'false');
    };
    TestWait.prototype.needTrue = function (element, expectedCount) {
        return element.count().then(function (elementCount) {
            return elementCount >= expectedCount;
        });
    };
    ;
    return TestWait;
}());
exports.TestWait = TestWait;
