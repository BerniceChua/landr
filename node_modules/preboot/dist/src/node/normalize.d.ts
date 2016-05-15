import { PrebootOptions } from '../interfaces/preboot_options';
export declare const listenStrategies: {
    attributes: boolean;
    event_bindings: boolean;
    selectors: boolean;
};
export declare const replayStrategies: {
    hydrate: boolean;
    rerender: boolean;
};
export declare const freezeStrategies: {
    spinner: boolean;
};
export declare let defaultFreezeStyles: {
    overlay: {
        className: string;
        style: {
            position: string;
            display: string;
            zIndex: string;
            top: string;
            left: string;
            width: string;
            height: string;
        };
    };
    spinner: {
        className: string;
        style: {
            position: string;
            display: string;
            zIndex: string;
        };
    };
};
export declare let normalizers: {
    pauseEvent: (opts: PrebootOptions) => void;
    resumeEvent: (opts: PrebootOptions) => void;
    completeEvent: (opts: PrebootOptions) => void;
    listen: (opts: PrebootOptions) => void;
    replay: (opts: PrebootOptions) => void;
    freeze: (opts: PrebootOptions) => void;
    presets: (opts: PrebootOptions) => void;
};
/**
 * Normalize options so user can enter shorthand and it is
 * expanded as appropriate for the browser code
 */
export declare function normalize(opts: PrebootOptions): PrebootOptions;
