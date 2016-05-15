"use strict";
/**
 * Warn the developer about direct access to Window props
 * @param  {String} prop The property being accessed
 */
function beDefensive(win, prop) {
    return win.__defineGetter__(prop, function () {
        console.warn("[WARNING] Property/method \"" + prop + "\" should not be called directly. Use DomAdapter instead.");
        //  TODO(wassim): find a generic solution to proxify DomAdapter
        //  let doc = DOM.defaultDoc();
        //  return DOM.querySelector(doc, ...args);
        return prop;
    });
}
exports.beDefensive = beDefensive;
exports.unforgeableAttributes = [
    "window",
    "document",
    "location",
    "top"
];
exports.replaceableAttributes = [
    "self",
    "locationbar",
    "menubar",
    "personalbar",
    "scrollbars",
    "statusbar",
    "toolbar",
    "frames",
    "parent",
    "external",
    "length",
    // CSSOM-View
    "screen",
    "scrollX",
    "scrollY",
    "pageXOffset",
    "pageYOffset",
    "innerWidth",
    "innerHeight",
    "screenX",
    "screenY",
    "outerWidth",
    "outerHeight",
    "devicePixelRatio",
].map(beDefensive);
exports.methods = [
    "close",
    "stop",
    "focus",
    "blur",
    "open",
    "alert",
    "confirm",
    "prompt",
    "print",
    "postMessage",
    // WindowBase64
    "btoa",
    "atob",
    // WindowTimers
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    // HTML Editing APIs
    "getSelection",
    // CSSOM
    "getComputedStyle",
    // CSSOM-View
    "matchMedia",
    "scroll",
    "scrollTo",
    "scrollBy"
];
exports.readonlyAttributes = [
    "history",
    "frameElement",
    "navigator",
    "applicationCache",
    // WindowSessionStorage
    "sessionStorage",
    // WindowLocalStorage
    "localStorage",
];
exports.writableAttributes = [
    "name",
    "status",
    "opener",
    "onabort",
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextmenu",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmousedown",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onoffline",
    "ononline",
    "onpause",
    "onplay",
    "onplaying",
    "onpagehide",
    "onpageshow",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onseeked",
    "onseeking",
    "onselect",
    "onshow",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "onunload",
    "onvolumechange",
    "onwaiting"
];
function createWindow(fn) {
    if (fn === void 0) { fn = beDefensive; }
    // the overloaded "window" must extend node's "global"
    // see: https://github.com/angular/angular/blob/master/modules/angular2/src/facade/lang.ts#L38
    var win = Object.create(global);
    exports.unforgeableAttributes.map(function (name) { return fn(win, name); });
    exports.replaceableAttributes.map(function (name) { return fn(win, name); });
    exports.methods.map(function (name) { return fn(win, name); });
    exports.readonlyAttributes.map(function (name) { return fn(win, name); });
    exports.writableAttributes.map(function (name) { return fn(win, name); });
    return win;
}
exports.createWindow = createWindow;
function setGlobal(win) {
    if (win === void 0) { win = createWindow(); }
    global.window = win;
}
exports.setGlobal = setGlobal;
//# sourceMappingURL=window.js.map