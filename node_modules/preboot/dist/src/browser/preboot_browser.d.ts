import { PrebootOptions } from '../interfaces/preboot_options';
/**
 * Once bootstrap has completed, we replay events,
 * switch buffer and then cleanup
 */
export declare function complete(): void;
/**
 * Initialization is really simple. Just save the options and set
 * the window object. Most stuff happens with start()
 */
export declare function init(opts: PrebootOptions): void;
/**
 * Start preboot by starting to record events
 */
export declare function start(): void;
