"use strict";
var helper_1 = require('./helper');
var _preboot = require('preboot');
exports.preboot = _preboot;
function prebootConfigDefault(config) {
    if (config === void 0) { config = {}; }
    return Object.assign({
        start: true,
        appRoot: 'app',
        replay: 'rerender',
        buffer: true,
        debug: false,
        uglify: true,
        presets: ['keyPress', 'buttonPress', 'focus']
    }, config || {});
}
exports.prebootConfigDefault = prebootConfigDefault;
function createPrebootCode(componentType, prebootConfig) {
    if (prebootConfig === void 0) { prebootConfig = {}; }
    if (!prebootConfig) {
        return Promise.resolve('');
    }
    if (typeof prebootConfig === 'boolean') {
        prebootConfig = {};
    }
    var selector = null;
    if (!Array.isArray(componentType)) {
        selector = helper_1.selectorResolver(componentType);
    }
    else {
        selector = componentType.map(helper_1.selectorResolver)[0]; // hard code last app
    }
    // Get selector from Component selector metadata
    prebootConfig.appRoot = prebootConfig.appRoot || selector;
    var config = prebootConfigDefault(prebootConfig);
    return exports.preboot.getBrowserCode(config).then(function (code) { return createPrebootHTML(code, config); });
}
exports.createPrebootCode = createPrebootCode;
function getPrebootCSS(min) {
    if (min) {
        /* tslint:disable */
        // https://cssminifier.com/
        return ".preboot-overlay{background:grey;opacity:.27}@keyframes spin{to{transform:rotate(1turn)}}.preboot-spinner{position:relative;display:inline-block;width:5em;height:5em;margin:0 .5em;font-size:12px;text-indent:999em;overflow:hidden;animation:spin 1s infinite steps(8)}.preboot-spinner.small{font-size:6px}.preboot-spinner.large{font-size:24px}.preboot-spinner:after,.preboot-spinner:before,.preboot-spinner>div:after,.preboot-spinner>div:before{content:'';position:absolute;top:0;left:2.25em;width:.5em;height:1.5em;border-radius:.2em;box-shadow:0 3.5em #eee;transform-origin:50% 2.5em}.preboot-spinner:before{background:#555}.preboot-spinner:after{transform:rotate(-45deg);background:#777}.preboot-spinner>div:before{transform:rotate(-90deg);background:#999}.preboot-spinner>div:after{transform:rotate(-135deg);background:#bbb}";
    }
    return "\n.preboot-overlay {\n  background: grey;\n  opacity: .27;\n}\n\n@keyframes spin {\n  to { transform: rotate(1turn); }\n}\n\n.preboot-spinner {\n  position: relative;\n  display: inline-block;\n  width: 5em;\n  height: 5em;\n  margin: 0 .5em;\n  font-size: 12px;\n  text-indent: 999em;\n  overflow: hidden;\n  animation: spin 1s infinite steps(8);\n}\n\n.preboot-spinner.small {\n  font-size: 6px;\n}\n\n.preboot-spinner.large {\n  font-size: 24px;\n}\n\n.preboot-spinner:before,\n.preboot-spinner:after,\n.preboot-spinner > div:before,\n.preboot-spinner > div:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 2.25em; /* (container width - part width)/2  */\n  width: .5em;\n  height: 1.5em;\n  border-radius: .2em;\n  background: #eee;\n  box-shadow: 0 3.5em #eee; /* container height - part height */\n  transform-origin: 50% 2.5em; /* container height / 2 */\n}\n\n.preboot-spinner:before {\n  background: #555;\n}\n\n.preboot-spinner:after {\n  transform: rotate(-45deg);\n  background: #777;\n}\n\n.preboot-spinner > div:before {\n  transform: rotate(-90deg);\n  background: #999;\n}\n\n.preboot-spinner > div:after {\n  transform: rotate(-135deg);\n  background: #bbb;\n}\n";
}
exports.getPrebootCSS = getPrebootCSS;
function createPrebootHTML(code, config) {
    var html = '';
    html += "\n    <style>\n    " + getPrebootCSS(config && config.uglify) + "\n    </style>\n  ";
    html += "\n    <script>\n    " + code + "\n    </script>\n  ";
    if (config && config.start === true) {
        html += '<script>\npreboot.start();\n</script>';
    }
    return html;
}
exports.createPrebootHTML = createPrebootHTML;
//# sourceMappingURL=ng_preboot.js.map