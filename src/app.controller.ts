import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext, logger } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async getLocaleHello(@I18n() i18n: I18nContext) {
    console.log(`test: ${i18n.t('test.product.new')}`);
    return await i18n.t('test.hello');
  }
}
