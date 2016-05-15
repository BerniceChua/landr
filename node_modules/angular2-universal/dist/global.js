"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var universal = require('./node/node');
__export(require('./node/node'));
function __global(m) {
    for (var p in m) {
        if (!global.hasOwnProperty(p)) {
            global[p] = m[p];
        }
    }
}
__global(universal);
//# sourceMappingURL=global.js.map