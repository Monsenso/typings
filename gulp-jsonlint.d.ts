declare module 'gulp-jsonlint' {
    import vinyl = require('vinyl');

    interface IGulpJsonLint {
        (): NodeJS.ReadWriteStream;
        reporter(customReporter?: IReporter): NodeJS.ReadWriteStream;
        failOnError(): NodeJS.ReadWriteStream;
        failAfterError(): NodeJS.ReadWriteStream;
    }

    interface IReporter {
        (file: vinyl): void;
    }

    let gulpJsonLint: IGulpJsonLint;
    export = gulpJsonLint;
}
