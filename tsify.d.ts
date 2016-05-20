/// <reference path="../node/node.d.ts" />
/// <reference path="../browserify/browserify.d.ts"/>

declare module "tsify" {
    import browserify = require('browserify')
    var tsify: <T>(b: Browserify.BrowserifyObject, opts: T) => any;
    export = tsify;
}

