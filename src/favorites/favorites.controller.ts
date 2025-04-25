import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('favorites')
export class FavoritesController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.natsClient.send('favorites.create', createFavoriteDto);
  }

  @Get()
  findAll() {
    return this.natsClient.send('favorites.findAll', {});
  }

  @Delete(':city')
  remove(@Param('city') city: string) {
    return this.natsClient.send('favorites.delete', city);
  }
}
