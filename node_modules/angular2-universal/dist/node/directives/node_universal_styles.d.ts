import { ElementRef } from '@angular/core';
import { DomSharedStylesHost } from '@angular/platform-browser/src/dom/shared_styles_host';
export declare class NodeUniversalStyles {
    el: ElementRef;
    domSharedStylesHost: DomSharedStylesHost;
    constructor(el: ElementRef, domSharedStylesHost: DomSharedStylesHost);
}
