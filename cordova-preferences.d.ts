/// <references path='../angularjs/angular.d.ts" />

declare module cordova {
    export interface ICordovaPreferencesService {
        set(key: string, value: any): angular.IPromise<void>;
        get(key: string): angular.IPromise<string>;
    }
}
