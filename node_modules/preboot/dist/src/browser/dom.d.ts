/**
 * This is a wrapper for the DOM that is used by preboot. We do this
 * for a few reasons. It makes the other preboot code more simple,
 * makes things easier to test (i.e. just mock out the DOM) and it
 * centralizes our DOM related interactions so we can more easily
 * add fixes for different browser quirks
 */
import { Element } from '../interfaces/element';
import { CursorSelection } from '../interfaces/preboot_ref';
export declare let nodeCache: {};
export declare let state: {
    window: any;
    document: any;
    body: any;
    appRoot: any;
    serverRoot: any;
    clientRoot: any;
};
/**
 * Initialize the DOM state based on input
 */
export declare function init(opts: any): void;
/**
 * Setter for app root
 */
export declare function updateRoots(appRoot: Element, serverRoot?: Element, clientRoot?: Element): void;
/**
 * Get a node in the document
 */
export declare function getDocumentNode(selector: string): Element;
/**
 * Get one app node
 */
export declare function getAppNode(selector: string): Element;
/**
 * Get all app nodes for a given selector
 */
export declare function getAllAppNodes(selector: string): Element[];
/**
 * Get all nodes under the client root
 */
export declare function getClientNodes(selector: string): Element[];
/**
 * Add event listener at window level
 */
export declare function onLoad(handler: Function): void;
/**
 * These are global events that get passed around. Currently
 * we use the document to do this.
 */
export declare function on(eventName: string, handler: Function): void;
/**
 * Dispatch an event on the document
 */
export declare function dispatchGlobalEvent(eventName: string): void;
/**
 * Dispatch an event on a specific node
 */
export declare function dispatchNodeEvent(node: Element, eventName: string): void;
/**
 * Check to see if the app contains a particular node
 */
export declare function appContains(node: Element): any;
/**
 * Create a new element
 */
export declare function addNodeToBody(type: string, className: string, styles: Object): Element;
/**
 * Remove a node since we are done with it
 */
export declare function removeNode(node: Element): void;
/**
 * Get the caret position within a given node. Some hackery in
 * here to make sure this works in all browsers
 */
export declare function getSelection(node: Element): CursorSelection;
/**
 * Set caret position in a given node
 */
export declare function setSelection(node: Element, selection: CursorSelection): void;
/**
 * Get a unique key for a node in the DOM
 */
export declare function getNodeKey(node: Element, rootNode: Element): string;
/**
 * Given a node from the server rendered view, find the equivalent
 * node in the client rendered view.
 */
export declare function findClientNode(serverNode: Element, nodeKey?: any): Element;
