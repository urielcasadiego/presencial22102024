import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { PaginationQueryDto } from '../../commons/dto/pagination-query.dto';

export interface Paginator {
  data: [];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Score {
  id: string;
  username: string;
  game: string;
  score: number;
}

@Injectable()
export class ScoresService {
  private scores: Score[] = [
    {
      id: '1',
      username: 'admin',
      game: 'snake',
      score: 345,
    },
    {
      id: '2',
      username: 'admin',
      game: 'snake',
      score: 323245,
    },
    {
      id: '23232',
      username: 'admin',
      game: 'snake',
      score: 4343,
    },
    {
      id: '3232',
      username: 'admin',
      game: 'snake',
      score: 234234,
    },
    {
      id: '234234',
      username: 'admin',
      game: 'snake',
      score: 2324334,
    },
    {
      id: '884884',
      username: 'admin',
      game: 'snake',
      score: 454544,
    },
    {
      id: '99382',
      username: 'admin',
      game: 'snake',
      score: 23434424,
    },
    {
      id: '5567373',
      username: 'admin',
      game: 'snake',
      score: 4645645654,
    },
    {
      id: '3737333',
      username: 'admin',
      game: 'snake',
      score: 992349243,
    },
    {
      id: '23432222',
      username: 'admin',
      game: 'snake',
      score: 23492349234,
    },
  ];

  getAllScores(paginationQuery: PaginationQueryDto): Paginator {
    const { limit = 10, page = 1 } = paginationQuery;
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = this.scores.slice(start, end);
    const total = this.scores.length;
    const totalPages = Math.ceil(total / limit);

    return <Paginator>{
      data,
      total,
      page,
      limit,
      totalPages,
    };
  }

  getScoreById(id: string): Score {
    return this.scores.find((score) => score.id === id);
  }

  updateScoreById(id: string, updateData: UpdateScoreDto) {
    const score = this.getScoreById(id);
    if (score) {
      Object.assign(score, updateData);
      return score;
    }
    throw new Error('Score not found');
  }

  deleteScoreById(id: string) {
    this.scores = this.scores.filter((score) => score.id !== id);
  }

  createScore(createUserDto: CreateScoreDto): Score {
    const newScore: Score = { id: uuidv4(), ...createUserDto };
    this.scores.push(newScore);
    return newScore;
  }
}
