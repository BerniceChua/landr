import { PrebootRef } from '../../interfaces/preboot_ref';
import { ReplayStrategy } from '../../interfaces/strategy';
import { PrebootEvent } from '../../interfaces/event';
/**
 * This replay strategy assumes that the browser completely re-rendered
 * the page so reboot will need to find the element in the new browser
 * rendered DOM that matches the element it has in memory.
 *
 * Any events that could not be replayed for whatever reason are returned.
 */
export declare function replayEvents(preboot: PrebootRef, strategy: ReplayStrategy, events: PrebootEvent[]): PrebootEvent[];
