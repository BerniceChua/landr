/**
 * The purpose of this module is to manage the buffering of client rendered
 * HTML to a hidden div. After the client is fully bootstrapped, this module
 * would then be used to switch the hidden client div and the visible server div.
 * Note that this technique would only work if the app root is somewhere within
 * the body tag in the HTML document.
 */
import { PrebootRef } from '../interfaces/preboot_ref';
export declare let state: {
    switched: boolean;
};
/**
 * Create a second div that will be the client root for an app
 */
export declare function prep(preboot: PrebootRef): void;
/**
 * We want to simultaneously remove the server node from the DOM
 * and display the client node
 */
export declare function switchBuffer(preboot: PrebootRef): void;
