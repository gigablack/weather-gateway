import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { NatsModule } from 'src/nats/nats.module';

@Module({
  controllers: [WeatherController],
  providers: [],
  imports: [NatsModule],
})
export class WeatherModule {}
