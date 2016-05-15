import { PrebootRef } from '../../interfaces/preboot_ref';
import { ReplayStrategy } from '../../interfaces/strategy';
import { PrebootEvent } from '../../interfaces/event';
/**
 * this replay strategy assumes that the browser did not blow away
 * the server generated HTML and that the elements in memory for
 * preboot can be used to replay the events.
 *
 * any events that could not be replayed for whatever reason are returned.
 */
export declare function replayEvents(preboot: PrebootRef, strategy: ReplayStrategy, events: PrebootEvent[]): PrebootEvent[];
