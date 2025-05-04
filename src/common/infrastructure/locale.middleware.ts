import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LocaleService } from '../application/services/locale.service';
import { Locale } from '../domain/enums/locale.enum';

@Injectable()
export class LocaleMiddleware implements NestMiddleware {
  constructor(private localeService: LocaleService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const locale= req.headers['accept-language'];
    if (typeof locale === 'string' && Locale.isValid(locale)) {
      this.localeService.setCurrentLocale(locale)
    }

    next();
  }
}
