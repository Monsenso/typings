declare module angular.base64 {
    interface IBase64EncodingService {
        decode(str: string): string;
        encode(str: string): string;
        urldecode(str: string): string;
        urlencode(str: string): string;
    }
}
