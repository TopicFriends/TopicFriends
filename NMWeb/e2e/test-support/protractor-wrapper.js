"use strict";
exports.__esModule = true;
var wait_1 = require("./wait");
var ProtractorWrapper = /** @class */ (function () {
    function ProtractorWrapper() {
        this.wait = new wait_1.TestWait();
    }
    ProtractorWrapper.prototype.click = function (element) {
        if (this.wait.forElementClickable(element)) {
            element.click();
        }
    };
    ProtractorWrapper.prototype.sendKeys = function (inputElement, text) {
        this.wait.forElementPresent(inputElement);
        inputElement.clear();
        inputElement.sendKeys(text);
    };
    return ProtractorWrapper;
}());
exports.ProtractorWrapper = ProtractorWrapper;
