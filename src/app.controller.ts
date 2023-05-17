import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/product')
  async getLocaleHello(@I18n() i18n: I18nContext, @Query('name') name: string) {
    const testResult = `test -> ${i18n.t('test.product.new', {
      args: [{ name }],
    })}`;
    return testResult;
  }
}
