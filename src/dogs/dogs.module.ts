import { Module } from '@nestjs/common';
import { DogsController } from './controllers/dogs/dogs.controller';
import { DogsService } from './services/dogs/dogs.service';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
