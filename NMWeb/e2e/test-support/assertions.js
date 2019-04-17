"use strict";
exports.__esModule = true;
var wait_1 = require("./wait");
var topic_sections_po_1 = require("../tests/user-profile/topics/topic-sections.po");
var TestAssertions = /** @class */ (function () {
    function TestAssertions() {
        this.wait = new wait_1.TestWait();
        this.topicSections = new topic_sections_po_1.TopicsSections();
    }
    //FIXME: fix the turtles all the way down
    TestAssertions.prototype.tagsMatch = function (selectedTopic, expectedTopic) {
        var _this = this;
        var topics = [];
        selectedTopic.then(function (topic) {
            topics.push(topic);
            _this.allTopicsToMatch(topics, expectedTopic);
        });
    };
    TestAssertions.prototype.sectionTagsMatch = function (topicsSection, selectedTopics) {
        var _this = this;
        var tagClosings = this.topicSections.allTagsClosings();
        this.wait.forElementCount(tagClosings, selectedTopics.length).then(function () {
            var expectedTopics = _this.topicSections.returnSelectedSectionTags(topicsSection);
            console.log('assert section: ' + topicsSection);
            _this.allTopicsToMatch(selectedTopics, expectedTopics);
        });
    };
    TestAssertions.prototype.elementIsContainingText = function (element, expectedText) {
        expect(element.getText()).toEqual(expectedText, 'Element doesn\'t contain text: ' + expectedText);
    };
    TestAssertions.prototype.saveNotificationAppears = function (saveElement) {
        return expect(this.wait.forElementPresent(saveElement))
            .toBeTruthy('Notification for successful \'Save\' didn\'t appear');
    };
    TestAssertions.prototype.allTopicsToMatch = function (selectedTopics, expectedTopics) {
        expectedTopics.then(function (expTopics) {
            var selectedTopicsCount = selectedTopics.length;
            var expectedTopicsCount = expTopics.length;
            expect(selectedTopicsCount).toBe(expectedTopicsCount, 'Failed: ' + selectedTopicsCount + ' topics selected but ' + expectedTopicsCount + ' topics expected');
            expTopics.forEach(function (topicPromise) {
                topicPromise.getText().then(function (topic) {
                    console.log('Expected Topic: ' + topic);
                    expect(selectedTopics.indexOf(' ' + topic) > -1).toBe(true, 'Expected topic \'' + topic + '\' wasn\'t found in tags');
                });
            });
        });
    };
    return TestAssertions;
}());
exports.TestAssertions = TestAssertions;
