import { IsString, IsNumber } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  username: string;

  @IsString()
  game: string;

  @IsNumber()
  score: number;

  @IsString()
  id: string;

}