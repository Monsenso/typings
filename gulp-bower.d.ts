/// <reference path="../node/node.d.ts" />

declare module "gulp-bower" {
    var bower: (opts?: Object|string, cmdArguments?: any[]) => NodeJS.ReadWriteStream;
    export = bower;
}

