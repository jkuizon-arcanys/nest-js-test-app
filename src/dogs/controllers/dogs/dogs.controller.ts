import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Redirect,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../../../common/filters/http-exception/http-exception.filter';
import { ErrorsInterceptor } from '../../../interceptors/errors.interceptor';
import { LoggingInterceptor } from '../../../interceptors/logging.interceptor';
import { ValidationPipe } from '../../../pipe/validation.pipe';
import { CreateDogDto } from '../../dto/create-dog-dto/create-dog-dto';
import { DogsService } from '../../services/dogs/dogs.service';

@Controller('dogs')
@UseInterceptors(LoggingInterceptor, ErrorsInterceptor)
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
    const dog = this.dogsService.findOne(id);
    if (!dog) {
      throw new HttpException('', HttpStatus.NOT_FOUND);
    }
    return dog;
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
