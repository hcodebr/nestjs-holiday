import { Module } from '@nestjs/common';
import { HolidaysController } from './holidays.controller';
import { HolidaysService } from './holidays.service';

@Module({
  controllers: [HolidaysController],
  providers: [HolidaysService]
})
export class HolidaysModule {
  

}
