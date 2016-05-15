"use strict";
var testing_1 = require('@angular/core/testing');
var url_1 = require('url');
var node_platform_location_1 = require('../../router/node_platform_location');
/* tslint:disable */
function normalizeProperties(_a) {
    var pathname = _a.pathname, search = _a.search, hash = _a.hash;
    pathname = pathname || '';
    search = search || '';
    hash = hash || '';
    if (search && search[0] !== '?') {
        search = '?' + search;
    }
    if (hash && hash[0] !== '#') {
        hash = '#' + hash;
    }
    return { pathname: pathname, search: search, hash: hash };
}
function expectProperties(spl, props) {
    if (typeof props === 'string') {
        props = url_1.parse(props);
    }
    props = normalizeProperties(props);
    testing_1.expect(spl.pathname).toBe(props.pathname);
    testing_1.expect(spl.search).toBe(props.search);
    testing_1.expect(spl.hash).toBe(props.hash);
}
function back(spl, steps) {
    while (steps--) {
        spl.back();
    }
}
function forward(spl, steps) {
    while (steps--) {
        spl.forward();
    }
}
testing_1.describe('NodePlatformLocation', function () {
    testing_1.describe('initialization', function () {
        testing_1.it('should initialize "pathname", "search" and "hash" properties through "requestUrl" parameter', function () {
            var urls = [
                { pathname: '/some/path', search: 'first=value1&second=value2', hash: 'somehash' },
                { pathname: '/', search: 'somevalue', hash: '' },
                { pathname: '', search: '', hash: '' }
            ];
            for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
                var urlParts = urls_1[_i];
                var spl = new node_platform_location_1.NodePlatformLocation('', url_1.format(urlParts));
                expectProperties(spl, urlParts);
            }
        });
        testing_1.it('should set new "pathname"', function () {
            var firstPathname = '/some/pathname';
            var secondPathname = '/another/pathname';
            var spl = new node_platform_location_1.NodePlatformLocation('', url_1.format({ pathname: firstPathname }));
            testing_1.expect(spl.pathname).toBe(firstPathname);
            spl.pathname = secondPathname;
            testing_1.expect(spl.pathname).toBe(secondPathname);
        });
        testing_1.it('should throw on trying to get base href from DOM', function () {
            var spl = new node_platform_location_1.NodePlatformLocation('', '/');
            testing_1.expect(function () { return spl.getBaseHrefFromDOM(); }).toThrowError();
        });
    });
    testing_1.describe('history stack', function () {
        var spl;
        var requestUrl = url_1.format({
            pathname: '/some/path',
            search: 'param=value&another=param',
            hash: 'qwecqpowc'
        });
        var states = [
            { state: 'state1', title: 'title1', url: '/some/url/1' },
            { state: 'state2', title: 'title2', url: '/some/url/2' },
            { state: 'state3', title: 'title3', url: '/some/url/3' }
        ];
        testing_1.beforeEach(function () {
            spl = new node_platform_location_1.NodePlatformLocation('', requestUrl);
        });
        testing_1.describe('pushState()', function () {
            testing_1.it('should update "pathname", "search" and "hash" properties', function () {
                expectProperties(spl, requestUrl);
                for (var _i = 0, states_1 = states; _i < states_1.length; _i++) {
                    var _a = states_1[_i], state = _a.state, title = _a.title, url = _a.url;
                    spl.pushState(state, title, url);
                    expectProperties(spl, url);
                }
            });
        });
        testing_1.describe('back()', function () {
            testing_1.beforeEach(function () {
                for (var _i = 0, states_2 = states; _i < states_2.length; _i++) {
                    var _a = states_2[_i], state = _a.state, title = _a.title, url = _a.url;
                    spl.pushState(state, title, url);
                }
            });
            testing_1.it('should update "pathname", "search" and "hash" properties accordig to the previous state', function () {
                for (var _i = 0, _a = states.concat().reverse(); _i < _a.length; _i++) {
                    var url = _a[_i].url;
                    expectProperties(spl, url);
                    spl.back();
                }
                expectProperties(spl, requestUrl);
            });
            testing_1.it('should call "onPopState" listeners', function () {
                var index = states.length;
                var popStateListener = jasmine.createSpy('popStateListener', function (event) {
                    testing_1.expect(event.type).toBe('popstate');
                    testing_1.expect(event.state).toBe(index ? states[index - 1].state : null);
                });
                spl.onPopState(popStateListener);
                while (index--) {
                    spl.back();
                    testing_1.expect(popStateListener).toHaveBeenCalled();
                }
            });
            testing_1.it('should do nothing if the previous state doesn\'t exist', function () {
                back(spl, states.length);
                var popStateListener = jasmine.createSpy('popStateListener');
                spl.onPopState(popStateListener);
                expectProperties(spl, requestUrl);
                spl.back();
                expectProperties(spl, requestUrl);
                testing_1.expect(popStateListener).not.toHaveBeenCalled();
            });
        });
        testing_1.describe('forward()', function () {
            testing_1.beforeEach(function () {
                for (var _i = 0, states_3 = states; _i < states_3.length; _i++) {
                    var _a = states_3[_i], state = _a.state, title = _a.title, url = _a.url;
                    spl.pushState(state, title, url);
                }
                back(spl, states.length);
            });
            testing_1.it('should update "pathname", "search" and "hash" properties accordig to the next state', function () {
                for (var _i = 0, states_4 = states; _i < states_4.length; _i++) {
                    var url = states_4[_i].url;
                    spl.forward();
                    expectProperties(spl, url);
                }
            });
            testing_1.it('should call "onPopState" listeners', function () {
                var index = 0;
                var popStateListener = jasmine.createSpy('popStateListener', function (event) {
                    testing_1.expect(event.type).toBe('popstate');
                    testing_1.expect(event.state).toBe(index ? states[index - 1].state : null);
                });
                spl.onPopState(popStateListener);
                while (++index < states.length) {
                    spl.forward();
                    testing_1.expect(popStateListener).toHaveBeenCalled();
                }
            });
            testing_1.it('should do nothing if the next state doesn\'t exist', function () {
                forward(spl, states.length);
                var url = states[states.length - 1].url;
                var popStateListener = jasmine.createSpy('popStateListener');
                spl.onPopState(popStateListener);
                expectProperties(spl, url);
                spl.forward();
                expectProperties(spl, url);
                testing_1.expect(popStateListener).not.toHaveBeenCalled();
            });
        });
        testing_1.describe('replaceState()', function () {
            testing_1.it('should update "pathname", "search" and "hash" properties', function () {
                expectProperties(spl, requestUrl);
                for (var _i = 0, states_5 = states; _i < states_5.length; _i++) {
                    var _a = states_5[_i], state = _a.state, title = _a.title, url = _a.url;
                    spl.replaceState(state, title, url);
                    expectProperties(spl, url);
                }
            });
            testing_1.it('should not add new state to the history stack', function () {
                var _a = states[0], state = _a.state, title = _a.title, url = _a.url;
                expectProperties(spl, requestUrl);
                spl.replaceState(state, title, url);
                expectProperties(spl, url);
                spl.back();
                expectProperties(spl, url);
            });
            testing_1.it('should not change other states in the history stack', function () {
                for (var _i = 0, states_6 = states; _i < states_6.length; _i++) {
                    var _a = states_6[_i], state = _a.state, title = _a.title, url = _a.url;
                    spl.pushState(state, title, url);
                }
                expectProperties(spl, states[states.length - 1].url);
                spl.back();
                expectProperties(spl, states[states.length - 2].url);
                spl.back();
                expectProperties(spl, states[states.length - 3].url);
                var replaceUrl = '/some/replace/url';
                spl.forward();
                spl.replaceState('state', 'title', replaceUrl);
                spl.back();
                expectProperties(spl, states[states.length - 3].url);
                spl.forward();
                expectProperties(spl, replaceUrl);
                spl.forward();
                expectProperties(spl, states[states.length - 1].url);
            });
        });
    });
});
/* tslint:enable */
//# sourceMappingURL=node_platform_location.spec.js.map