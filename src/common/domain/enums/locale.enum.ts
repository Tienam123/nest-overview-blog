export enum Locale {
  EN = 'en',
  RU = 'ru',
  UA = 'ua',
  DE = 'de'
}

export namespace Locale {
  export function isValid(value: string): value is Locale {
    return Object.values(Locale).includes(value as Locale);
  }
}