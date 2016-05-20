/// <reference path="../node/node.d.ts" />
/// <refernece path="../browserify/browserify.d.ts" />
declare module "watchify" {

    import browserify = require('browserify')

    interface Watchify {
        (b: Browserify.BrowserifyObject): Browserify.BrowserifyObject;
        args: Object;
    }

    var watchify: Watchify;
    export = watchify;
}
