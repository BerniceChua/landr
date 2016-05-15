import { PrebootOptions } from '../interfaces/preboot_options';
export declare let browserCodeCache: {};
/**
 * We want to use the browserify ignore functionality so that any code modules
 * that are not being used are stubbed out. So, for example, if in the preboot
 * options the only listen strategy is selectors, then the event_bindings and
 * attributes strategies will be stubbed out (meaing the refs will be {})
 */
export declare function ignoreUnusedStrategies(b: any, bOpts: Object, strategyOpts: any[], allStrategies: Object, pathPrefix: string): void;
/**
 * Generate browser code as a readable stream for preboot based on the input options
 */
export declare function getBrowserCodeStream(opts?: PrebootOptions): any;
export declare var getClientCodeStream: typeof getBrowserCodeStream;
/**
 * Generate browser code as a string for preboot
 * based on the input options
 */
export declare function getBrowserCode(opts?: PrebootOptions, done?: Function): any;
export declare var getClientCode: typeof getBrowserCode;
