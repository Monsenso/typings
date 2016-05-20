/// <reference path="../node/node.d.ts" />

declare module "gulp-angular-translate" {
    interface IOptions {
        language?: string;
        module?: string;
        standalone?: string;
    }
    var angularTranslate
        : (filename?: string, options?: IOptions) => NodeJS.ReadWriteStream;
    export = angularTranslate;
}

