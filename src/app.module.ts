import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { NatsModule } from './nats/nats.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { APP_GUARD } from '@nestjs/core';
import { WeatherModule } from './weather/weather.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 100,
        },
      ],
    }),
    NatsModule,
    AutocompleteModule,
    WeatherModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
