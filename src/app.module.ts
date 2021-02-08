import { Module } from '@nestjs/common';
import { HolidaysModule } from './holidays/holidays.module';
import { typeOrmConfig } from './config/typeorm.config';
import {TypeOrmModule } from '@nestjs/typeorm';
//Este é o módulo Root, toda aplicação tem ao menos um módulo.
//o módulo Root, veja que está usando um decorator @Module

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HolidaysModule]
})
export class AppModule {}
