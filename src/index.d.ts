export { l as default };
declare function l(t: any): o;
declare class o extends n {
    constructor(t?: {});
    apps: {};
    wares: any[];
    bwares: {};
    parse: any;
    server: any;
    handler(t: any, e: any, r: any): any;
    onError: any;
    onNoMatch: any;
    add(t: any, s: any, ...e: any[]): this;
    use(t: any, ...s: any[]): this;
    listen(...args: any[]): this;
}
declare class n {
    routes: any[];
    all: any;
    get: any;
    head: any;
    patch: any;
    options: any;
    connect: any;
    delete: any;
    trace: any;
    post: any;
    put: any;
    use(t: any, ...s: any[]): this;
    add(t: any, s: any, ...n: any[]): this;
    find(t: any, s: any): {
        params: {};
        handlers: any[];
    };
}
//# sourceMappingURL=index.d.ts.map