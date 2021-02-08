import { Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
//import { Holiday } from './holidays.model';
import { HolidaysService } from './holidays.service';
import {Holiday} from './holiday.entity';
@Controller('holidays')
export class HolidaysController {

    //passamos como um parâmetro no construtor;
  //assim qualquer método dessa classe consegue ter acesso a ele;
  constructor(private holidaysService: HolidaysService){}

//  @Get()
//   getAllHolidays(): Holiday[]{
//     return this.holidaysService.getAllHolidays();
//   }

  @Get('/:id')
  getHolidayById(@Param('id') id: number): Promise<Holiday>{
    return this.holidaysService.getHolidayById(id);
  }

  @Post()
  createHoliday(@Body() createHolidayDto: CreateHolidayDto): Promise<Holiday>{
  
       return this.holidaysService.createHoliday(createHolidayDto)
  }

  @Delete('/:id')
  deleteHoliday(@Param('id') id: number): Promise<void> {
     return  this.holidaysService.deleteHoliday(id);
  }

  @Patch('/:id')
  updateHoliday(
      @Param('id') id: number,
      @Body('name') name: string,
      @Body('date') date: Date): Promise<Holiday>{
   return this.holidaysService.updateHoliday(id, name, date);
  }
}
