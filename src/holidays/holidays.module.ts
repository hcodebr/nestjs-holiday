import { Module } from '@nestjs/common';
import { HolidaysController } from './holidays.controller';
import { HolidaysService } from './holidays.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { HolidayRepository } from './holiday.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HolidayRepository])
  ],
  controllers: [HolidaysController],
  providers: [HolidaysService]
  })
export class HolidaysModule {}
