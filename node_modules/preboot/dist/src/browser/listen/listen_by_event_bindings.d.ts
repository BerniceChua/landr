import { PrebootRef } from '../../interfaces/preboot_ref';
import { ListenStrategy } from '../../interfaces/strategy';
import { NodeEvent } from '../../interfaces/event';
export declare let state: {
    nodeEvents: any[];
};
/**
 * This is from Crockford to walk the DOM (http://whlp.ly/1Ii6YbR).
 * Recursively walk DOM tree and execute input param function at
 * each node.
 */
export declare function walkDOM(node: any, func: Function): void;
/**
 * This is function called at each node while walking DOM.
 * Will add node event if events defined on element.
 */
export declare function addNodeEvents(node: any): void;
/**
 * This listen strategy will look for a specific attribute which contains all the elements
 * that a given element is listening to.
 */
export declare function getNodeEvents(preboot: PrebootRef, strategy: ListenStrategy): NodeEvent[];
