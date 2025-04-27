import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { CreateAutocompleteDto } from './dto/create-autocomplete.dto';

@Controller('autocomplete')
export class AutocompleteController {
  constructor(@Inject(NATS_SERVICE) private readonly natsClient: ClientProxy) {}

  @Get()
  getAutocompleteSuggestions(
    @Query() createAutocompleteDto: CreateAutocompleteDto,
  ) {
    return this.natsClient.send('autocomplete.get', createAutocompleteDto);
  }
}
