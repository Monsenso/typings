interface Cordova {
    exec(success: (x: any) => any, fail: (x: any) => any, service: string, action: string, args?: string[]): void;
}
