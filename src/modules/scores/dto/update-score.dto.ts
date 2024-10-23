import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateScoreDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  game?: string;

  @IsOptional()
  @IsNumber()
  score?: number;
}
