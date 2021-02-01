import { Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { Holiday } from './holidays.model';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {

    //passamos como um parâmetro no construtor;
  //assim qualquer método dessa classe consegue ter acesso a ele;
  constructor(private holidaysService: HolidaysService){}

 @Get()
  getAllHolidays(): Holiday[]{
    return this.holidaysService.getAllHolidays();
  }

  @Get('/:id')
  getHolidayById(@Param('id') id: string){
    return this.holidaysService.getHolidayById(id);
  }

  @Post()
  createHoliday(@Body() createHolidayDto: CreateHolidayDto){
  
       return this.holidaysService.createHoliday(createHolidayDto)
  }

  @Delete('/:id')
  deleteHoliday(@Param('id') id: string) {
      this.holidaysService.deleteHoliday(id);
  }

  @Patch('/:id')
  updateHoliday(
      @Param('id') id: string,
      @Body('name') name: string,
      @Body('date') date: Date): Holiday{
   return this.holidaysService.updateHoliday(id, name, date);
  }
}
