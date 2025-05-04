import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Locale } from '../../domain/enums/locale.enum';

@Injectable()
export class LocaleService {
  private static currentLocale: Locale = Locale.EN;
  constructor(private configService: ConfigService) {
    LocaleService.currentLocale = this.configService.get<Locale>(
      'APP_LOCALE',
      Locale.EN,
    );
  }

  getCurrentLocale(): string {
    return LocaleService.currentLocale;
  }

  setCurrentLocale(locale: Locale): Locale {
    LocaleService.currentLocale = locale;
    return LocaleService.currentLocale;
  }
}
