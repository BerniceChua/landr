export interface NodeEvent {
    node: any;
    eventName: string;
}
export interface PrebootEvent {
    node: any;
    nodeKey?: any;
    event: any;
    name: string;
    time?: number;
}
export interface DomEvent {
    which?: number;
    type?: string;
    target?: any;
    preventDefault(): any;
}
