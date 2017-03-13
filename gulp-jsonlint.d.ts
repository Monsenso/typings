declare module 'gulp-jsonlint' {
    interface GulpJsonLint {
        (): NodeJS.ReadWriteStream;
        reporter(): NodeJS.ReadWriteStream;
    }

    let gulpJsonLint: GulpJsonLint;
    export = gulpJsonLint;
}
