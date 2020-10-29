import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../../../common/filters/http-exception/http-exception.filter';
import { ValidationPipe } from '../../../pipe/validation.pipe';
import { CreateDogDto } from '../../dto/create-dog-dto/create-dog-dto';
import { DogsService } from '../../services/dogs/dogs.service';

@Controller('dogs')
@UseFilters(HttpExceptionFilter)
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dogsService.findOne(id);
  }

  @Get('ab*cd')
  findWildcard() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
