"use strict";
// regex for how events defined in Angular 2 templates; for example:
//    <div on-click="blah()">
//    <div (click)="blah()">
var ngEventPattern = /^(?:on-|\()([-\w]+)\)?$/;
// state for this module just includes the nodeEvents (exported for testing purposes)
exports.state = { nodeEvents: [] };
/**
 * This is from Crockford to walk the DOM (http://whlp.ly/1Ii6YbR).
 * Recursively walk DOM tree and execute input param function at
 * each node.
 */
function walkDOM(node, func) {
    if (!node) {
        return;
    }
    func(node);
    node = node.firstChild;
    while (node) {
        walkDOM(node, func);
        node = node.nextSibling;
    }
}
exports.walkDOM = walkDOM;
/**
 * This is function called at each node while walking DOM.
 * Will add node event if events defined on element.
 */
function addNodeEvents(node) {
    var attrs = node.attributes;
    // if no attributes, return without doing anything
    if (!attrs) {
        return;
    }
    // otherwise loop through attributes to try and find an Angular 2 event binding
    for (var _i = 0, attrs_1 = attrs; _i < attrs_1.length; _i++) {
        var attr = attrs_1[_i];
        var name_1 = attr.name;
        // extract event name from the () or on- (TODO: replace this w regex)
        var matchedEventName = name_1.match(ngEventPattern);
        // if attribute name is an Angular 2 event binding
        if (matchedEventName && matchedEventName.length > 0) {
            exports.state.nodeEvents.push({
                node: node,
                eventName: matchedEventName.pop()
            });
        }
    }
}
exports.addNodeEvents = addNodeEvents;
/**
 * This listen strategy will look for a specific attribute which contains all the elements
 * that a given element is listening to.
 */
function getNodeEvents(preboot, strategy) {
    exports.state.nodeEvents = [];
    walkDOM(preboot.dom.state.body, addNodeEvents);
    return exports.state.nodeEvents;
}
exports.getNodeEvents = getNodeEvents;
//# sourceMappingURL=listen_by_event_bindings.js.map