import { NgZone } from '@angular/core';
import { XHR } from '@angular/compiler';
export declare class NodeXHRImpl extends XHR {
    ngZone: NgZone;
    private _originUrl;
    _baseUrl: string;
    constructor(ngZone: NgZone, _originUrl?: string, _baseUrl?: string);
    get(templateUrl: string): Promise<string>;
}
