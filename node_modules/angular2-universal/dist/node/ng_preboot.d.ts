import * as _preboot from 'preboot';
export declare var preboot: typeof _preboot;
export declare function prebootConfigDefault(config?: {}): any;
export declare function createPrebootCode(componentType: any | Array<any>, prebootConfig?: any): Promise<string>;
export declare function getPrebootCSS(min?: boolean): string;
export declare function createPrebootHTML(code: string, config?: any): string;
