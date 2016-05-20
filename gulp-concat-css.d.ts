/// <reference path="../node/node.d.ts" />

declare module "gulp-concat-css" {
    interface IOptions {
        inlineImports?: boolean;
        rebaseUrls?: boolean;
        includePaths?: boolean;
    }

    var concatCss: (targetFile: string, opts?: IOptions) => NodeJS.ReadWriteStream;
    export = concatCss;
}

