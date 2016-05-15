import { PrebootRef } from '../interfaces/preboot_ref';
import { PrebootOptions } from '../interfaces/preboot_options';
import { ListenStrategy } from '../interfaces/strategy';
import { Element } from '../interfaces/element';
import { NodeEvent } from '../interfaces/event';
import * as listenAttr from './listen/listen_by_attributes';
import * as listenEvt from './listen/listen_by_event_bindings';
import * as listenSelect from './listen/listen_by_selectors';
import * as replayHydrate from './replay/replay_after_hydrate';
import * as replayRerender from './replay/replay_after_rerender';
export declare let state: {
    eventListeners: any[];
    events: any[];
    listening: boolean;
};
export declare let strategies: {
    listen: {
        'attributes': typeof listenAttr;
        'event_bindings': typeof listenEvt;
        'selectors': typeof listenSelect;
    };
    replay: {
        'hydrate': typeof replayHydrate;
        'rerender': typeof replayRerender;
    };
};
/**
 * For a given node, add an event listener based on the given attribute. The attribute
 * must match the Angular pattern for event handlers (i.e. either (event)='blah()' or
 * on-event='blah'
 */
export declare function getEventHandler(preboot: PrebootRef, strategy: ListenStrategy, node: Element, eventName: string): Function;
/**
 * Loop through node events and add listeners
 */
export declare function addEventListeners(preboot: PrebootRef, nodeEvents: NodeEvent[], strategy: ListenStrategy): void;
/**
 * Add event listeners based on node events found by the listen strategies.
 * Note that the getNodeEvents fn is gathered here without many safety
 * checks because we are doing all of those in src/server/normalize.ts.
 */
export declare function startListening(preboot: PrebootRef, opts: PrebootOptions): void;
/**
 * Loop through replay strategies and call replayEvents functions. In most cases
 * there will be only one replay strategy, but users may want to add multiple in
 * some cases with the remaining events from one feeding into the next.
 * Note that as with startListening() above, there are very little safety checks
 * here in getting the replayEvents fn because those checks are in normalize.ts.
 */
export declare function replayEvents(preboot: PrebootRef, opts: PrebootOptions): void;
/**
 * Go through all the event listeners and clean them up
 * by removing them from the given node (i.e. element)
 */
export declare function cleanup(preboot: PrebootRef, opts: PrebootOptions): void;
