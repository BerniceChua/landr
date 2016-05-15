"use strict";
var presets_1 = require('../../src/node/presets');
/**
 * These tests are pretty basic, but just have something in
 * place that we can expand in the future
 */
describe('presets', function () {
    describe('keyPress()', function () {
        it('should add listen selector', function () {
            var opts = { listen: [] };
            var expected = {
                listen: [
                    {
                        name: 'selectors',
                        eventsBySelector: {
                            'input,textarea': ['keypress', 'keyup', 'keydown', 'input', 'change']
                        }
                    },
                    {
                        name: 'selectors',
                        eventsBySelector: {
                            'select,option': ['change']
                        }
                    }
                ]
            };
            presets_1.default.keyPress(opts);
            expect(opts).toEqual(expected);
        });
    });
    describe('focus()', function () {
        it('should add listen selector', function () {
            var opts = { listen: [] };
            var expected = {
                listen: [{
                        name: 'selectors',
                        eventsBySelector: {
                            'input,textarea': ['focusin', 'focusout', 'mousedown', 'mouseup']
                        },
                        trackFocus: true,
                        doNotReplay: true
                    }]
            };
            presets_1.default.focus(opts);
            expect(opts).toEqual(expected);
        });
    });
    describe('buttonPress()', function () {
        it('should add listen selector', function () {
            var opts = { listen: [], freeze: { name: 'spinner', eventName: 'yoyo' } };
            var expected = {
                listen: [{
                        name: 'selectors',
                        preventDefault: true,
                        eventsBySelector: {
                            'input[type="submit"],button': ['click']
                        },
                        dispatchEvent: opts.freeze.eventName
                    }],
                freeze: { name: 'spinner', eventName: 'yoyo' }
            };
            presets_1.default.buttonPress(opts);
            expect(opts).toEqual(expected);
        });
    });
    describe('pauseOnTyping()', function () {
        it('should add listen selector', function () {
            var opts = { listen: [], pauseEvent: 'foo', resumeEvent: 'choo' };
            var expected = {
                listen: [
                    {
                        name: 'selectors',
                        eventsBySelector: {
                            'input': ['focus'],
                            'textarea': ['focus']
                        },
                        doNotReplay: true,
                        dispatchEvent: opts.pauseEvent
                    },
                    {
                        name: 'selectors',
                        eventsBySelector: {
                            'input': ['blur'],
                            'textarea': ['blur']
                        },
                        doNotReplay: true,
                        dispatchEvent: opts.resumeEvent
                    }
                ],
                pauseEvent: opts.pauseEvent,
                resumeEvent: opts.resumeEvent
            };
            presets_1.default.pauseOnTyping(opts);
            expect(opts).toEqual(expected);
        });
    });
});
//# sourceMappingURL=presets_spec.js.map