import { PrebootRef } from '../../interfaces/preboot_ref';
import { PrebootOptions } from '../../interfaces/preboot_options';
export declare let state: {
    overlay: any;
    spinner: any;
};
/**
 * Clean up the freeze elements from the DOM
 */
export declare function cleanup(preboot: PrebootRef): void;
/**
 * Prepare for freeze by adding elements to the DOM and adding an event handler
 */
export declare function prep(preboot: PrebootRef, opts: PrebootOptions): void;
