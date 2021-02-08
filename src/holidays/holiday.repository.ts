import { Holiday } from './holiday.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HolidaysType } from './holiday-type.enum';

@EntityRepository(Holiday)
export class HolidayRepository extends Repository<Holiday> {
    async  createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
        const {name, date } = createHolidayDto;

        const holiday = new Holiday();
        holiday.name = name;
        holiday.date = date;
        holiday.type = HolidaysType.NACIONAL;
       await holiday.save();

       return holiday;
    }
}