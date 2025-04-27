import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAutocompleteDto {
  @IsNotEmpty({ message: 'Query parameter is required' })
  @IsString({ message: 'Query must be a string' })
  @Transform(({ value }) => {
    const newValue = value.replace(/[^\p{L}\s]/gu, '').trim();
    return newValue.replace(' ', '-');
  })
  query: string;
}
