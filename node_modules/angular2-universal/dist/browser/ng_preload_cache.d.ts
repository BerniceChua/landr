import { Http, Response, RequestOptions, ConnectionBackend } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class NgPreloadCacheHttp extends Http {
    protected _backend: ConnectionBackend;
    protected _defaultOptions: RequestOptions;
    prime: boolean;
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions);
    preload(method: any): Observable<any> | EventEmitter<any>;
    request(url: string, options: any): Observable<Response> | EventEmitter<any>;
    get(url: string, options: any): Observable<Response> | EventEmitter<any>;
    post(url: string, body: string, options: any): Observable<Response> | EventEmitter<any>;
    put(url: string, body: string, options: any): Observable<Response> | EventEmitter<any>;
    delete(url: string, options: any): Observable<Response> | EventEmitter<any>;
    patch(url: string, body: string, options: any): Observable<Response> | EventEmitter<any>;
    head(url: string, options: any): Observable<Response> | EventEmitter<any>;
}
export declare const NG_PRELOAD_CACHE_PROVIDERS: Array<any>;
