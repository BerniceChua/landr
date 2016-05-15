import { PrebootRef } from '../../interfaces/preboot_ref';
import { ListenStrategy } from '../../interfaces/strategy';
import { NodeEvent } from '../../interfaces/event';
/**
 * This listen strategy will look for a specific attribute which contains all the elements
 * that a given element is listening to. For ex. <div preboot-events="click,focus,touch">
 */
export declare function getNodeEvents(preboot: PrebootRef, strategy: ListenStrategy): NodeEvent[];
