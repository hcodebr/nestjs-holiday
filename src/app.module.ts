import { Module } from '@nestjs/common';
import { HolidaysModule } from './holidays/holidays.module';

//Este é o módulo Root, toda aplicação tem ao menos um módulo.
//o módulo Root, veja que está usando um decorator @Module

@Module({
  imports: [HolidaysModule]
})
export class AppModule {}
