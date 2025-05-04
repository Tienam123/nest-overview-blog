import {Locale} from "../../../../common/domain/enums/locale.enum";

export class LocalizedField {
    constructor( private translations: Record<string, string> = {}) {}


    update(locale: Locale, value: string): void {
        this.translations[locale] = value;
    }


    get(locale: Locale): string | undefined {
        return this.translations[locale];
    }

    getAll(): Record<string, string> {
        return this.translations;
    }
}