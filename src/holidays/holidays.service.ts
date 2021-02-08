import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { Holiday, HolidaysType } from './holidays.model';
//import { v4 as uuidv4 } from 'uuid';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HolidayRepository } from './holiday.repository';
import { Holiday} from './holiday.entity';
import { HolidaysType } from './holiday-type.enum';
@Injectable()
export class HolidaysService {
    constructor(
        @InjectRepository(HolidayRepository)
        private holidayRepository: HolidayRepository
    ){}
    
    //REMOVER: private holidays: Holiday[] = [];


    // getAllHolidays(): Holiday[] {
    //     return this.holidays;
    // }

   async  getHolidayById(id: number): Promise<Holiday> {
        //ele retorna uma promise.
        const found = await this.holidayRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Holiday ${id} not found`);
        }
        return found;
    }
    // getHolidayById(id: string): Holiday {
    //     return this.holidays.find(holiday => holiday.id == id)

    // }
  async  createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
        return this.holidayRepository.createHoliday(createHolidayDto);
    }
    // createHoliday(createHolidayDto: CreateHolidayDto){
    //     const {name, date} = createHolidayDto;

    //     const holiday: Holiday = {
    //         id: uuidv4(),
    //         name,
    //         date,
    //         type: HolidaysType.NACIONAL
    //     };

    //     this.holidays.push(holiday);
    //     return holiday;
    // }

    async  deleteHoliday(id: number): Promise<void> {
       const result = await this.holidayRepository.delete(id);
       console.log(result);
    }

   async updateHoliday(id: number, name: string, date: Date): Promise<Holiday> {
        const holiday = await this.getHolidayById(id);

        holiday.name = name;
        holiday.date = date;
        await holiday.save();
        return holiday;
    }
}
