/// <reference path="../angular/index.d.ts" />

declare module bs {
    interface ILoadingOverlayService {
        start(options?: IBsLoadingOverlayOptions): void;
        wrap(options: IBsLoadingOverlayOptions, promiseFunction: angular.IPromise<any> | (() => (angular.IPromise<any> | {}))): angular.IPromise<any>;
        createHandler: (options: IBsLoadingOverlayOptions) => IBsLoadingOverlayHandler;
        notifyOverlays(referenceId: string): void;
        stop(options?: IBsLoadingOverlayOptions): void;
        isActive: (referenceId?: string) => boolean;
        setGlobalConfig: (options: IBsLoadingOverlayOptions) => any;
        getGlobalConfig: () => IBsLoadingOverlayOptions;
    }

    interface IBsLoadingOverlayOptions {
        referenceId?: string;
        templateUrl?: string;
        templateOptions?: any;
        activeClass?: string;
        delay?: number;
    }

    interface IBsLoadingOverlayHandler {
        start: () => void;
        stop: () => void;
        wrap: (promiseFunction: angular.IPromise<any> | (() => (angular.IPromise<any> | {}))) => angular.IPromise<any>;
    }
}