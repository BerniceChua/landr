"use strict";
/**
 * This listen strategy will look for a specific attribute which contains all the elements
 * that a given element is listening to. For ex. <div preboot-events="click,focus,touch">
 */
function getNodeEvents(preboot, strategy) {
    var attributeName = strategy.attributeName || 'preboot-events';
    var elems = preboot.dom.getAllAppNodes('[' + attributeName + ']');
    // if no elements found, return empty array since no node events
    if (!elems) {
        return [];
    }
    // else loop through all the elems and add node events
    var nodeEvents = [];
    for (var _i = 0, elems_1 = elems; _i < elems_1.length; _i++) {
        var elem = elems_1[_i];
        var events = elem.getAttribute(attributeName).split(',');
        for (var _a = 0, events_1 = events; _a < events_1.length; _a++) {
            var eventName = events_1[_a];
            nodeEvents.push({
                node: elem,
                eventName: eventName
            });
        }
    }
    return nodeEvents;
}
exports.getNodeEvents = getNodeEvents;
//# sourceMappingURL=listen_by_attributes.js.map