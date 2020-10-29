import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './controllers/dogs/dogs.controller';
import { DogsService } from './services/dogs/dogs.service';

@Module({
  imports: [],
  controllers: [AppController, DogsController],
  providers: [AppService, DogsService],
})
export class AppModule {}
