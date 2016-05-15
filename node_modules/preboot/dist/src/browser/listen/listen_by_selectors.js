"use strict";
/**
 * This listen strategy uses a list of selectors maped to events. For example:
 *    {
 *      'input[type="text"],textarea': ['focusin', 'focusout'],
 *      'button': ['click']
 *    }
 */
function getNodeEvents(preboot, strategy) {
    var nodeEvents = [];
    var eventsBySelector = strategy.eventsBySelector || {};
    var selectors = Object.keys(eventsBySelector);
    // loop through selectors
    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        var events = eventsBySelector[selector];
        var elems = preboot.dom.getAllAppNodes(selector);
        // if no elems, go to next iteration in for loop
        if (!elems) {
            continue;
        }
        // for each node and eventName combo, add a nodeEvent
        for (var _a = 0, elems_1 = elems; _a < elems_1.length; _a++) {
            var elem = elems_1[_a];
            for (var _b = 0, events_1 = events; _b < events_1.length; _b++) {
                var eventName = events_1[_b];
                nodeEvents.push({
                    node: elem,
                    eventName: eventName
                });
            }
        }
    }
    return nodeEvents;
}
exports.getNodeEvents = getNodeEvents;
//# sourceMappingURL=listen_by_selectors.js.map