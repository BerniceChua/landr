import { ElementRef, OpaqueToken } from '@angular/core';
import { Renderer } from '@angular/core';
export declare const APP_LOCATION: OpaqueToken;
export declare class NodeForm {
    constructor(element: ElementRef, renderer: Renderer, appLocation?: string);
}
