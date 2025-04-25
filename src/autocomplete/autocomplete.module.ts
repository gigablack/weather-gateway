import { Module } from '@nestjs/common';
import { AutocompleteController } from './autocomplete.controller';
import { NatsModule } from 'src/nats/nats.module';

@Module({
  controllers: [AutocompleteController],
  providers: [],
  imports: [NatsModule],
})
export class AutocompleteModule {}
