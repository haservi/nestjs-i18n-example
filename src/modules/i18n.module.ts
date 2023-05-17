import { Module } from '@nestjs/common';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'ja',
      fallbacks: {
        'en-*': 'en',
        'ko-*': 'ko',
        'ja-*': 'ja',
      },
      loaderOptions: {
        path: path.join(__dirname, '../i18n/'),
        watch: true,
      },
      resolvers: [
        new QueryResolver(['lang']),
        new HeaderResolver(['Accept-Language']),
        // new CookieResolver(),
        AcceptLanguageResolver,
      ],
    }),
  ],
})
export class i18nModule {}
