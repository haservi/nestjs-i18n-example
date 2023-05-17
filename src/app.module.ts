import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { urlencoded } from 'express';
import { i18nModule } from './modules/i18n.module';

@Module({
  imports: [i18nModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(urlencoded({ extended: true })).forRoutes('*');
  }
}
