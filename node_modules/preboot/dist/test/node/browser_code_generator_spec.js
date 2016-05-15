"use strict";
var browserify = require('browserify');
var browser_code_generator_1 = require('../../src/node/browser_code_generator');
describe('clientCodeGenerator', function () {
    describe('ignoreUnusedStrategies()', function () {
        it('should filter out inactive strategies', function () {
            var b = browserify();
            var bOpts = { something: 'yo' };
            var strategyOpts = [{ name: 'foo' }, { name: 'choo' }];
            var allStrategies = { foo: true, choo: true, zoo: true, moo: true };
            var pathPrefix = 'prefix';
            spyOn(b, 'ignore');
            browser_code_generator_1.ignoreUnusedStrategies(b, bOpts, strategyOpts, allStrategies, pathPrefix);
            expect(b.ignore).not.toHaveBeenCalledWith(pathPrefix + 'foo.js', bOpts);
            expect(b.ignore).not.toHaveBeenCalledWith(pathPrefix + 'choo.js', bOpts);
            expect(b.ignore).toHaveBeenCalledWith(pathPrefix + 'zoo.js', bOpts);
            expect(b.ignore).toHaveBeenCalledWith(pathPrefix + 'moo.js', bOpts);
        });
    });
    describe('getBrowserCode()', function () {
        it('should get client code with a listen strategy', function (done) {
            var opts = { listen: [{ name: 'selectors' }], replay: [] };
            browser_code_generator_1.getBrowserCode(opts, function (err, clientCode) {
                expect(err).toBeNull();
                expect(clientCode).toMatch(/function getNodeEvents/);
                done();
            });
        });
    });
});
//# sourceMappingURL=browser_code_generator_spec.js.map