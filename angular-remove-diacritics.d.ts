declare module txx.diacritics {
    interface IRemoveDiacriticsService {
        replace(input: string): string;
        seo(input: string): string;
    }
}