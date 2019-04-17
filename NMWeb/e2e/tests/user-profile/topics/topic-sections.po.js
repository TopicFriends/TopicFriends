"use strict";
exports.__esModule = true;
var wait_1 = require("../../../test-support/wait");
var protractor_1 = require("protractor");
var protractor_wrapper_1 = require("../../../test-support/protractor-wrapper");
var TopicsSections = /** @class */ (function () {
    function TopicsSections() {
        this.wait = new wait_1.TestWait();
        this.ptor = new protractor_wrapper_1.ProtractorWrapper();
        this.hackathonSectionSelector = 'app-topic-group-card[formcontrolname="hackathon"]';
        this.pairProgrammingSectionSelector = 'app-topic-group-card[formcontrolname="pairProgramming"]';
        this.exchangeSectionSelector = 'app-topic-group-card[formcontrolname="exchange"]';
        this.tagSelector = 'app-topic-tag-list app-topic-tag';
        this.tagCloseIconSelector = this.tagSelector + ' i.ion-close-circled';
    }
    TopicsSections.prototype.returnSelectedSectionTags = function (topicSectionSelector) {
        this.wait.forElementPresent(protractor_1.$(this.tagSelector));
        return this.returnAllSelectedTopicTags(topicSectionSelector);
    };
    TopicsSections.prototype.assembleTopicInputLocator = function (topicSectionSelector) {
        return protractor_1.$(topicSectionSelector + ' input');
    };
    TopicsSections.prototype.inputTopic = function (topicSectionSelector, topic) {
        this.wait.forElementClickable(protractor_1.$(topicSectionSelector));
        return this.assembleTopicInputLocator(topicSectionSelector).sendKeys(topic);
    };
    TopicsSections.prototype.allTagsClosings = function () {
        return protractor_1.$$(this.tagCloseIconSelector);
    };
    TopicsSections.prototype.inputMultipleTagsInOneSection = function (topicsSection, topics) {
        var _this = this;
        var selectedTopics = [];
        var topicInput = this.assembleTopicInputLocator(topicsSection);
        this.wait.forElementPresent(protractor_1.$(topicsSection));
        topics.forEach(function (topic) {
            _this.inputTopic(topicsSection, topic);
            protractor_1.browser.sleep(200);
            _this.selectFirstSuggestedTag(topicInput).then(function (tag) {
                selectedTopics.push(tag);
                topicInput.clear();
            });
        });
        this.wait.forElementCount(this.returnAllSelectedTopicTags(topicsSection), topics.length);
        return selectedTopics;
    };
    TopicsSections.prototype.removeAllTags = function () {
        var _this = this;
        this.wait.forElementPresent(protractor_1.$(this.tagSelector)).then(function () {
            protractor_1.browser.sleep(5000);
            _this.allTagsClosings().count().then(function (count) {
                while (count > 0) {
                    _this.ptor.click(_this.allTagsClosings().first());
                    protractor_1.browser.sleep(200);
                    count--;
                }
            });
        });
    };
    TopicsSections.prototype.selectFirstSuggestedTag = function (element) {
        var markedTopicFromSelectList = protractor_1.$('mat-option.mat-active');
        this.wait.forElementClickable(element);
        element.sendKeys(protractor_1.protractor.Key.ARROW_DOWN);
        this.wait.forElementClickable(markedTopicFromSelectList);
        var optionSelected = markedTopicFromSelectList.getText();
        element.sendKeys(protractor_1.protractor.Key.ENTER);
        return optionSelected;
    };
    TopicsSections.prototype.returnAllSelectedTopicTags = function (topicSectionSelector) {
        return protractor_1.$$(topicSectionSelector + ' ' + this.tagSelector + ' span>a');
    };
    return TopicsSections;
}());
exports.TopicsSections = TopicsSections;
