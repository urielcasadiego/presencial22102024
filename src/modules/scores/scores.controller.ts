import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, Query} from '@nestjs/common';
import { ScoresService, Score, Paginator } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PaginationQueryDto } from '../../commons/dto/pagination-query.dto';

@Controller('scores')
export class ScoresController {

    constructor(private readonly scoreService: ScoresService) {}

@Get()
getAllScores(@Query() paginationQuery: PaginationQueryDto): Paginator {
  return this.scoreService.getAllScores(paginationQuery);
}

  @Get(':id')
  getUserById(@Param('id') id: string ): Score | undefined {
    return this.scoreService.getScoreById(id);
  }

  @Post()
  createScore(@Body() createUserDto: CreateScoreDto): Score {
    return this.scoreService.createScore(createUserDto);
  }

  @Put(':id')
  updateScore(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto): Score {
    return this.scoreService.updateScoreById(id, updateScoreDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteScore(@Param('id') id: string ) {
    this.scoreService.deleteScoreById(id);
  }
}
