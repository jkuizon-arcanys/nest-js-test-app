<<<<<<< Updated upstream:src/controllers/dogs/dogs.controller.ts
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CreateDogDto } from 'src/dto/create-dog-dto/create-dog-dto';
=======
import { Body, Controller, Get, Post, Query, Redirect } from '@nestjs/common';
import { CreateDogDto } from '../../dto/create-dog-dto/create-dog-dto';
>>>>>>> Stashed changes:src/dogs/controllers/dogs/dogs.controller.ts
import { DogsService } from '../../services/dogs/dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  findAll() {
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
