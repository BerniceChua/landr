/**
 * Warn the developer about direct access to Window props
 * @param  {String} prop The property being accessed
 */
export declare function beDefensive(win: any, prop: any): any;
export declare const unforgeableAttributes: string[];
export declare const replaceableAttributes: any[];
export declare const methods: string[];
export declare const readonlyAttributes: string[];
export declare const writableAttributes: string[];
export declare function createWindow(fn?: Function): any;
export declare function setGlobal(win?: any): void;
