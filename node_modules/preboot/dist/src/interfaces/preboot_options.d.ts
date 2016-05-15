export interface PrebootOptions {
    listen?: any;
    replay?: any;
    freeze?: any;
    appRoot?: string;
    pauseEvent?: string;
    resumeEvent?: string;
    completeEvent?: string;
    presets?: any;
    uglify?: boolean;
    buffer?: boolean;
    debug?: boolean;
    disableCodeCache?: boolean;
}
