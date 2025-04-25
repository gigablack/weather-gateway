import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Controller('autocomplete')
export class AutocompleteController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) {}

  @Get()
  getSuggestions(@Query('query') query: string) {
    return this.natsClient.send('autocomplete.get', query);
  }
}
