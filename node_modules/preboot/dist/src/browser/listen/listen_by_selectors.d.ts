import { PrebootRef } from '../../interfaces/preboot_ref';
import { ListenStrategy } from '../../interfaces/strategy';
import { NodeEvent } from '../../interfaces/event';
/**
 * This listen strategy uses a list of selectors maped to events. For example:
 *    {
 *      'input[type="text"],textarea': ['focusin', 'focusout'],
 *      'button': ['click']
 *    }
 */
export declare function getNodeEvents(preboot: PrebootRef, strategy: ListenStrategy): NodeEvent[];
