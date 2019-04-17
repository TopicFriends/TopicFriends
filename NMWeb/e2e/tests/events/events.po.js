"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var wait_1 = require("../../test-support/wait");
var EventsPage = /** @class */ (function () {
    function EventsPage() {
        this.wait = new wait_1.TestWait();
        this.eventSelector = 'app-meeting-list-item[formcontrolname="meeting"]';
        this.eventItem = protractor_1.$('mat-list-item');
        this.goingButtonInList = protractor_1.$('mat-card-actions app-going-button button');
    }
    EventsPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('meeting-list');
    };
    EventsPage.prototype.allEvents = function () {
        return protractor_1.$$(this.eventSelector);
    };
    return EventsPage;
}());
exports.EventsPage = EventsPage;
