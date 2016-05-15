import { EventEmitter, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Connection, ConnectionBackend, RequestOptions, ResponseOptions, RequestOptionsArgs, Request, Response, ReadyState, BrowserXhr } from '@angular/http';
export declare function buildBaseUrl(url: string, existing?: boolean): any;
export declare class NodeXhrConnection implements Connection {
    request: Request;
    /**
     * Response {@link EventEmitter} which emits a single {@link Response} value on load event of
     * `XMLHttpRequest`.
     */
    response: any;
    readyState: ReadyState;
    constructor(req: Request, browserXHR: BrowserXhr, baseResponseOptions?: ResponseOptions);
}
export declare class NodeXhr {
    _baseUrl: string;
    constructor(baseUrl?: string);
    build(): XMLHttpRequest;
}
export declare class NodeXhrBackend {
    private _browserXHR;
    private _baseResponseOptions;
    constructor(_browserXHR: BrowserXhr, _baseResponseOptions: ResponseOptions);
    createConnection(request: any): Connection;
}
export declare class NgPreloadCacheHttp extends Http {
    protected _backend: ConnectionBackend;
    protected _defaultOptions: RequestOptions;
    protected _ngZone: NgZone;
    protected prime: boolean;
    _async: number;
    _callId: number;
    _rootNode: any;
    _activeNode: any;
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, _ngZone: NgZone, prime?: boolean);
    preload(url: any, factory: any): EventEmitter<{}>;
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    get(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response> | EventEmitter<any>;
}
