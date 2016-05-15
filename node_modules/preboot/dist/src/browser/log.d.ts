/**
 * Idea here is simple. If debugging turned on and this module exists, we
 * log various things that happen in preboot. The calling code only references
 * a number (keys in logMap) to a handling function. By doing this, we are
 * able to cut down on the amount of logging code in preboot when no in debug mode.
 */
export declare function log(...args: any[]): void;
