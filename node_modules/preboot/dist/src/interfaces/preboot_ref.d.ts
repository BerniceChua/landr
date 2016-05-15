import { Element } from './element';
export interface DomState {
    window?: Element;
    document?: Element;
    body?: Element;
    appRoot?: Element;
    serverRoot?: Element;
    clientRoot?: Element;
}
export interface CursorSelection {
    start?: number;
    end?: number;
    direction?: string;
}
export interface Dom {
    state?: DomState;
    init?(opts: any): any;
    updateRoots?(appRoot: Element, serverRoot?: Element, clientRoot?: Element): any;
    getDocumentNode?(selector: string): Element;
    getAppNode?(selector: string): Element;
    getNodeKey?(node: Element, rootNode: Element): string;
    getAllAppNodes?(selector: string): Element[];
    getClientNodes?(selector: string): Element[];
    onLoad?(handler: Function): any;
    on?(eventName: string, handler: Function): any;
    dispatchGlobalEvent?(eventName: string): any;
    dispatchNodeEvent?(node: Element, eventName: string): any;
    appContains?(node: Element): Boolean;
    addNodeToBody?(type: string, className: string, styles: Object): any;
    removeNode?(node: Element): any;
    findClientNode?(serverNode: Element, nodeKey?: any): Element;
    getSelection?(node: Element): CursorSelection;
    setSelection?(node: Element, selection: CursorSelection): any;
}
export interface PrebootRef {
    dom: Dom;
    log?: Function;
    activeNode?: any;
    time?: number;
    selection?: CursorSelection;
}
