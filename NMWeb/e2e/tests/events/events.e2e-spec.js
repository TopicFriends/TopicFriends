"use strict";
exports.__esModule = true;
var login_po_1 = require("../login/login.po");
var events_po_1 = require("./events.po");
var wait_1 = require("../../test-support/wait");
var assertions_1 = require("../../test-support/assertions");
describe('Events: User', function () {
    var page;
    var loginPage;
    var wait;
    var assert;
    beforeAll(function () {
        page = new events_po_1.EventsPage();
        loginPage = new login_po_1.LoginPage();
        wait = new wait_1.TestWait();
        assert = new assertions_1.TestAssertions();
        page.navigateTo().then(function () {
            loginPage.loginWhenAlreadySignedInToGoogle();
        });
    });
    it('can see events list with at least one event', function () {
        page.navigateTo().then(function () {
            wait.forElementPresent(page.eventItem);
            expect(page.allEvents().count()).toBeGreaterThanOrEqual(1, 'No events found');
        });
    });
    // it('can RSVP to an event', () => {
    //   let button = page.goingButtonInList
    //   wait.forElementText(button, 'Are you going').then(() => {
    //     button.click()
    //     wait.forElementText(button, 'I\'m going')
    //   })
    //
    //   page.navigateTo().then(() => {
    //     expect(wait.forElementText(button, 'I\'m going')).toBeTruthy()
    //   })
    // })
    // it('can unRSVP to an event', () => {
    //   // let button = page.goingButtonInList
    //   // wait.forElementText(button, 'I\'m going')
    //   // button.click()
    //   // wait.forElementText(button, 'I\'m not going')
    //   //
    //   // page.navigateTo().then(() => {
    //   //   wait.forElementPresent(button)
    //   //   wait.forElementWithoutText(button, 'Loading...')
    //   //   expect(button.getText()).toContain('I\'m not going')
    //   // })
    // })
    // it('can see event details when clicks "Details" button', () => {
    //
    // })
    //
    // it('can see event details when clicks event title', () => {
    //
    // })
    //
    // it('can RSVP to an event on meeting details page', () => {
    //
    // })
    //
    // it('can unRSVP to an event on meeting details page', () => {
    //
    // })
});
