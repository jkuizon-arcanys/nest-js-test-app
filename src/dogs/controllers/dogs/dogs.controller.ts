import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Redirect,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../../../common/filters/http-exception/http-exception.filter';
import { CreateDogDto } from '../../dto/create-dog-dto/create-dog-dto';
import { DogsService } from '../../services/dogs/dogs.service';

@Controller('dogs')
@UseFilters(HttpExceptionFilter)
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.dogsService.findAll();
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
