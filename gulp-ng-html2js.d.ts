/// <reference path="../node/node.d.ts" />

declare module "gulp-ng-html2js" {
    interface IOptions {
        moduleName(file: { path: string }): string;
    }
  var html2js: (opts: IOptions) => any;
  export = html2js;
}

