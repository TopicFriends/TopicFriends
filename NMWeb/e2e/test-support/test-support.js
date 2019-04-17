"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var fs_extra = require("fs-extra");
var TestSupport = /** @class */ (function () {
    function TestSupport() {
        this.TMP_FOLDER_PATH = "/tmp/protractor";
        var fs = require("fs");
        if (!fs.existsSync(this.TMP_FOLDER_PATH)) {
            this.createDirectoryRecursively(this.TMP_FOLDER_PATH);
        }
    }
    TestSupport.prototype.takeScreenshot = function (prefix, path) {
        var filePath;
        if (path) {
            filePath = path;
        }
        else {
            filePath = this.TMP_FOLDER_PATH;
        }
        protractor_1.browser.takeScreenshot().then(function (png) {
            var filename = prefix + "-" + new Date().getTime();
            var stream = fs_extra.createWriteStream(filePath + "/" + filename + ".png");
            stream.write(Buffer.from(png, "base64"));
            stream.end();
        });
    };
    TestSupport.prototype.switchTabs = function (tab) {
        return protractor_1.browser.getAllWindowHandles().then(function (handles) {
            protractor_1.browser.switchTo().window(handles[tab]);
        });
    };
    TestSupport.prototype.acceptAlertIfAppears = function () {
        protractor_1.browser.driver
            .switchTo()
            .alert()
            .then(function (alert) {
            alert.accept();
        }, function (error) {
            console.log("No alert visible");
        });
    };
    TestSupport.prototype.createDirectoryRecursively = function (path) {
        fs_extra.mkdirp(path, function (err) {
            if (err) {
                console.error('Directory "' + path + '" not created!', err);
            }
            else {
                console.log('Directory "' + path + '" created!');
            }
        });
    };
    return TestSupport;
}());
exports.TestSupport = TestSupport;
